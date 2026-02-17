import mongoose, { Schema } from "mongoose";
import bcrypt from 'bcrypt'
import jwt from "jsonwebtoken"

const UserSchema = new Schema({
    avatar: {
        type: {
            url: String,
            localPath: String,
        },
        default: {
            url: `https://placehold.co/200x200`,
            localPath: ``,
        },
    },
    username: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true,
        index: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true
    },
    fullName: {
        type: String,
        required: true,
        trim: true
    },
    password: {
        type: String,
        required: [true, "Password is required"]
    },
    isEmailVerified: {
        type: Boolean,
        default: false
    },
    refreshToken: {
        type: String
    },
    forgotPasswordToken: {
        type: String
    },
    forgotPasswordExpiry: {
        type: Date
    },
    emailVerficationToken: {
        type: String
    },
    emailVerficationExpiry: {
        type: Date
    }
}, {
    timestamps: true
}
);


UserSchema.pre("save", async function (next) {
    if (!this.isModified("password")) return next()
    this.password = await bcrypt.hash(this.password, 10)
    next
})

UserSchema.methods.isPasswordCorrect = async function (password) {
    return await bcrypt.compare(password, this.password)
}

UserSchema.methods.generateAccessToken = function () {
    jwt.sign(
        {
            //this is more than enough for payload
            // we can access everything in db using _id(given by mognodb)
            _id: this._id,
            username: this.username
        },
        process.env.ACCESS_TOKEN_SECRET,
        { expiresIn: process.env.ACCESS_TOKEN_EXPIRY }
    )
}

UserSchema.methods.generateRefreshToken = function () {
    jwt.sign(
        {
            _id: this._id,
            username: this.username
        },
        process.env.REFRESH_TOKEN_SECRET,
        { expiresIn: process.env.REFRESH_TOKEN_EXPIRY }
    )
}

mongoose.model("User", UserSchema);

