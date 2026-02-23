import { User } from '../models/user.models.js'
import { ApiResponse } from "../utils/api-response.js";
import { ApiError } from "../utils/api-error.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import { generateAccessAndRefreshToken } from './register.controller.js';

const forgotPasswordRequest = asyncHandler(async (req, res) => {
    
})

export { forgotPasswordRequest }