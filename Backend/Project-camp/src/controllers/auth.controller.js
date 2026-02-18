import { User } from '../models/user.models.js'
import { ApiResponse } from "../utils/api-response.js";
import { ApiError } from "../utils/api-error.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import { sendEMail, emailVerificationMailContent } from "../utils/mail.js"

const generateAccessAndRefreshToken = async (userId) => {
    try {
        const user = await User.findById(userId)
        const accessToken = user.generateAccessToken();
        const refreshToken = user.generateRefreshToken();

        user.refreshToken = refreshToken;
        await user.save({ validateBeforeSave: false })
        return { accessToken, refreshToken }
    } catch (error) {
        throw new ApiError(
            500,
            "Something wrong while generating access token"
        );
    }
}

const registerUser = asyncHandler(async (req, res) => {
    const { username, email, password, role } = req.body;

    const exsitingUser = await User.findOne({
        $or: [{ username }, { email }]
    })
    if (exsitingUser) {
        throw new ApiError(409, "Email or Username already exist", [])
    }

    const user = await User.create({
        username,
        email,
        password
    })

    const { unHashedTokens, hashedTokens, TokenExpiry } = user.generateTemporaryToken();

    user.emailVerificationToken = hashedTokens
    user.emailVerificationExpiry = TokenExpiry
    await user.save({ validateBeforeSave: false })

    await sendEMail({
        email: user?.email,
        subject: "Please verify your email",
        mailgenContent: emailVerificationMailContent(
            user?.username,
            // `${req.protocol}://${req.get("host")}/api/v1/users/verify-email/${unHashedTokens}`
            `${process.env.BASE_URL}/api/v1/users/verify-email/${unHashedTokens}`
        )
    })
    // with - will not send to json in resposne 
    const createdUser = await User.findById(user._id).select(
        '-password -refreshToken -emailVerificationToken -emailVerificationExpiry'
    )

    if (!createdUser) {
        throw new ApiError(
            500,
            "Something went wrong while registering the user"
        )
    }

    return res.status(201).json(
        new ApiResponse(
            200,
            { user: createdUser },
            "User registered successfully, verification email has been sent to email"
        )
    )

})

const login = asyncHandler(async (req, res) => {
    const { email, password, username } = req.body;

    // if (!username || !email) {
    if (!username) {
        throw new ApiError(400, "Username is required", [])
    }
    const user = await User.findOne({ username });
    if (!user) {
        throw new ApiError(400, "User does not exist");
    }
    const isPasswordValid = await user.isPasswordCorrect(password)
    if (!isPasswordValid) {
        throw new ApiError(400, "Invalid credentials");
    }
    const { accessToken, refreshToken } = await generateAccessAndRefreshToken(user._id)
    const loggedInUser = await User.findById(user._id).select(
        '-password -refreshToken -emailVerificationToken -emailVerificationExpiry'
    )
    const options = {
        httpOnly: true,
        secure: true
    }

    return res
        .status(201)
        .cookie("accessToken", accessToken, options)
        .cookie("refreshToken", refreshToken, options)
        .json(
            new ApiResponse(200,
                {
                    user: loggedInUser,
                    accessToken,
                    refreshToken
                },
                "User logged in successfully"
            )
        )
})

export { registerUser, login }