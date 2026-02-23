import { User } from '../models/user.models.js'
import { ApiResponse } from "../utils/api-response.js";
import { ApiError } from "../utils/api-error.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import { forgotPasswordMailContent } from '../utils/mail.js';

const forgotPasswordRequest = asyncHandler(async (req, res) => {
    const { email } = req.body;

    const user = await User.findOne({ email })

    if (!user) {
        throw new ApiError(404, "User does not exist")
    }
    const { unHashedTokens, hashedTokens, TokenExpiry } = user.generateTemporaryToken()
    user.forgotPasswordToken = hashedTokens
    user.forgotPasswordExpiry = TokenExpiry

    await user.save({ validateBeforeSave: false })

    await sendEMail({
        email: user?.email,
        subject: "password reset request",
        mailgenContent: forgotPasswordMailContent(
            user?.username,
            // `${req.protocol}://${req.get("host")}/api/v1/users/verify-email/${unHashedTokens}`
            `${process.env.FORGOT_PASSWORD_REDIRECT_URL}/${unHashedTokens}`
        )
    })

    return res
            .status(200)
            .json(
                new ApiResponse(200, {}, "Password reset mail has been sent on your email")
            )
})

export { forgotPasswordRequest }