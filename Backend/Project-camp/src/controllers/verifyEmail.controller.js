import { User } from '../models/user.models.js'
import { ApiResponse } from "../utils/api-response.js";
import { ApiError } from "../utils/api-error.js";
import { asyncHandler } from "../utils/asyncHandler.js";

const verifyEmail = asyncHandler(async(req, res) => {
    const {verificationToken} = req.params

    if(!verificationToken){
        throw new ApiError(400, "Email verification token is missing")
    }
})

export { verifyEmail }