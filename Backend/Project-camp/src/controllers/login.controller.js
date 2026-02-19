import { User } from '../models/user.models.js'
import { ApiResponse } from "../utils/api-response.js";
import { ApiError } from "../utils/api-error.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import { generateAccessAndRefreshToken } from './register.controller.js';

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
        .status(200)
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

export { login }