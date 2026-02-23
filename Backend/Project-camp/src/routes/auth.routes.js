import { Router } from "express"
import { registerUser } from "../controllers/register.controller.js"
import { validate } from "../middlewares/validator.middleware.js"
import { logoutUser } from "../controllers/logout.controller.js";
import { verifyJWT } from "../middlewares/auth.middleware.js";
import { login } from "../controllers/login.controller.js";
import { getCurrentUser } from "../controllers/currentUser.controller.js";
import { verifyEmail, resendEMailVerification} from "../controllers/verifyEmail.controller.js";
import { refreshAccessToken } from "../controllers/refreshToken.controller.js";
import { forgotPasswordRequest } from "../controllers/forgotpasswordRequest.controller.js";

import { 
    userRegisterValidator, 
    userLoginValidator, 
    userChangeCurrentPasswordValidator, 
    userForgotPasswordValidator, 
    userForgotPasswordValidator, 
    userResetForgotPasswordValidator 
} from "../validators/index.js"



const router = Router();

// unsecured routes
router.route('/register').post(userRegisterValidator(), validate, registerUser)
router.route('/login').post(userLoginValidator(), validate, login)
router.route("/verify-email/:verificationToken").get(verifyEmail)
router.route("/refresh-token").post(refreshAccessToken)
router.route("/forgot-password").post(userForgotPasswordValidator(), forgotPasswordRequest) 

// secure route
router.route('/current-user').get(getCurrentUser)
router.route('/logout').post(verifyJWT, logoutUser)

export default router;