import { body } from "express-validator";

const userRegisterValidator = () => {
    return[
        body("emai")
            .trim()
            .notEmpty()
            .withMessage("Email is required")
            .isEmail()
            .withMessage("Email is invalid"),

        body("username")
            .trim()
            .notEmpty()
            .withMessage("Username is required")
            .isLowercase()
            .withMessage("Username must be in lowercase")
            .isLength({min: 3})
            .withMessage("Username must be atleast 3 characters"),

        body("password")
            .trim()
            .notEmpty()
            .withMessage("Password is required")
            .isLength({min: 8})
            .withMessage("Password must be atleast 8 character"),
        
        body("fullname")
            .optional()
            .trim()                

    ]
}
const userLoginValidator = () => {
    return[
        body("emai")
            .trim()
            .notEmpty()
            .withMessage("Email is required")
            .isEmail()
            .withMessage("Email is invalid"),

        body("username")
            .trim()
            .notEmpty()
            .withMessage("Username is required")
            .isLowercase()
            .withMessage("Username must be in lowercase")
            .isLength({min: 3})
            .withMessage("Username must be atleast 3 characters"),

        body("password")
            .trim()
            .notEmpty()
            .withMessage("Password is required")
            .isLength({min: 8})
            .withMessage("Password must be atleast 8 character"),              

    ]
}

export { userRegisterValidator, userLoginValidator }