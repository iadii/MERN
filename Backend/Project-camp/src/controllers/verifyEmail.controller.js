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

    return res
        .status(200)
        .json(
            new ApiResponse(
                200,
                { isEmailVerified: true },
                "EMail is verified"
            )
        )
})
const resendEMailVerification = asyncHandler(async (req, res) => {
    const user = await User.findById(req.user?._id );
    if(!user){
        throw new ApiError(
            404, "User does not exist"
        )
    }

    if(user.isEmailVerified){
        throw new ApiError(409, "EMail is already verified")
    }

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

    return res
        .status(200)  
        .json(
            new ApiResponse(
                200,
                {},
                "Mail has been sent to your email id"
            )
        )
})

export { verifyEmail }