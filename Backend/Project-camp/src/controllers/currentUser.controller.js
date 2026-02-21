import { User } from '../models/user.models.js'
import { ApiResponse } from "../utils/api-response.js";
import { ApiError } from "../utils/api-error.js";
import { asyncHandler } from "../utils/asyncHandler.js";

const getCurrentUser = asyncHandler(async(req, res) => {
    
    return res
            .status(200)
            .json(
                new ApiResponse(
                    200, req.user,
                    "Current user fetched successfully"
                )
            )
})

export { getCurrentUser }