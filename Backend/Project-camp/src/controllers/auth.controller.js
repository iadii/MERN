import { User } from '../models/user.models.js'
import { ApiResponse } from "../utils/api-response.js";
import { ApiError } from "../utils/api-error.js";
import { asyncHandler } from "../utils/asyncHandler.js";

const generateAccessAndRefreshToken = async (userId) => {
    try {
        const user = await User.findById(userId)
        const accessToken = user.generateAccessToken();
        const refreshToken = user.generateRefreshToken();

        user.refreshToken = refreshToken;
        await User.save({ validateBeforeSave: false })
        return { accessToken, refreshToken }
    } catch (error) {
        throw new ApiError(
            500,
            "Something wrong while generating access token"
        );
    }
}

const register = asyncHandler(async (req, res) => {
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
    user.emailVerficationExpiry = TokenExpiry
    await User.save({ validateBeforeSave: false })
})