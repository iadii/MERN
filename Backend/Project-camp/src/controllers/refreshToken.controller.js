import { User } from '../models/user.models.js'
import { ApiResponse } from "../utils/api-response.js";
import { ApiError } from "../utils/api-error.js";
import { asyncHandler } from "../utils/asyncHandler.js";

const refreshAccessToken = asyncHandler(async (req, res) => {
    req.cookies
})

export {refreshAccessToken}