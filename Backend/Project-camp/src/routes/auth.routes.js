import { Router } from "express"
import { registerUser } from "../controllers/auth/register.controller.js"
import { validate } from "../middlewares/validator.middleware.js"
import { logoutUser } from "../controllers/auth/logout.controller.js";
import { verifyJWT } from "../middlewares/auth.middleware.js";
import { login } from "../controllers/auth/login.controller.js";
import { getCurrentUser } from "../controllers/auth/currentUser.controller.js";
import { verifyEmail, resendEMailVerification } from "../controllers/auth/verifyEmail.controller.js";
import { refreshAccessToken } from "../controllers/auth/refreshToken.controller.js";
import { forgotPasswordRequest } from "../controllers/auth/forgotpasswordRequest.controller.js";
import { resetForgotPassword } from "../controllers/auth/resetPassword.controller.js";
import { changeCurrentPassword } from "../controllers/auth/changePassword.controller.js";

import {
    userRegisterValidator,
    userLoginValidator,
    userChangeCurrentPasswordValidator,
    userForgotPasswordValidator,
    userResetForgotPasswordValidator
} from "../validators/index.js"


const router = Router();

// unsecured routes
router.route('/register').post(userRegisterValidator(), validate, registerUser)
router.route('/login').post(userLoginValidator(), validate, login)
router.route("/verify-email/:verificationToken").get(verifyEmail)
router.route("/refresh-token").post(refreshAccessToken)
router.route("/forgot-password").post(userForgotPasswordValidator(), validate, forgotPasswordRequest)
router.route("/reset-password/:resetToken").post(userResetForgotPasswordValidator(), validate, resetForgotPassword)

// secure route
router.route('/current-user').post(verifyJWT, getCurrentUser)
router.route('/logout').post(verifyJWT, logoutUser)
router.route("/change-password").post(verifyJWT, userChangeCurrentPasswordValidator(), validate, changeCurrentPassword)
router.route("/resend-email-verification").post(verifyJWT, resendEMailVerification)

export default router;