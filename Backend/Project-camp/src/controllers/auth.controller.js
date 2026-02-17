import { User } from '../models/user.models'
import { ApiResponse } from "../utils/api-response.js";
import { ApiError } from "../utils/api-error.js";
import { asyncHandler } from "../utils/asyncHandler.js";



const register = asyncHandler(async (req, res) => {
    const { username, email, password, role } = req.body;

    const exsitingUser = await User.findOne({
        $or: [{username}, {email}]
    })
    if(exsitingUser){
        throw new ApiError(409, "Email or Username already exist", [])
    }

    const user = await User.create({
        username,
        email,
        password 
    })

    
})