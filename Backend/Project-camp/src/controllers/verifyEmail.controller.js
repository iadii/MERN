import { User } from '../models/user.models.js'
import { ApiResponse } from "../utils/api-response.js";
import { ApiError } from "../utils/api-error.js";
import { asyncHandler } from "../utils/asyncHandler.js";

const verifyEmail = asyncHandler(async (req, res) => {
    const { verificationToken } = req.params

    if (!verificationToken) {
        throw new ApiError(400, "Email verification token is missing")
    }

    let hashedToken = crypto
        .createHash("256")
        .update(verificationToken)
        .digest("hex")

    const user = await User.findOne({
        emailVerificationToken: hashedToken,
        emailVerificationExpiry: { $gt: Date.now() }
    })
    if (!user) {
        throw new ApiError(400, "Email verification code is invalid")
    }
    // cleaning up unnecessary data which is in user model
    user.emailVerificationToken = undefined
    user.emailVerificationExpiry = undefined
    
    user.isEmailVerified = true
    await user.save({ validateBeforeSave: false })
})

export { verifyEmail }