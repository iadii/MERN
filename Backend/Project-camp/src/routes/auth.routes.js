import { Router } from "express"
import { registerUser } from "../controllers/register.controller.js"
import { validate } from "../middlewares/validator.middleware.js"
import { userRegisterValidator, userLoginValidator } from "../validators/index.js";
import { logoutUser } from "../controllers/logout.controller.js";
import { verifyJWT } from "../middlewares/auth.middleware.js";
import { login } from "../controllers/login.controller.js";
import { getCurrentUser } from "../controllers/currentUser.controller.js";

const router = Router();

router.route('/register').post(userRegisterValidator(), validate, registerUser)

router.route('/login').post(userLoginValidator(), validate, login)
router.route('/logout').post(verifyJWT, logoutUser)
router.route('/current-user').post(getCurrentUser)

export default router;