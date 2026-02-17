import mongoose, { Schema } from "mongoose";
import bcrypt from 'bcrypt'
import jwt from "jsonwebtoken"
import crypto from 'crypto'

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
    role: {
        type: String,
        enum: ['user', 'admin', 'moderator'],
        default: 'user'
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

    // jwt.sign({payload},secret, expiry)
    // we can leave secret , then jwt will use by default secret
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

// Temporary token (without data token)
UserSchema.methods.generateTemporaryToken = () => {
    const unHashedTokens = crypto.randomBytes(20).toString("hex")

    const hashedTokens = crypto
        .createHash("sha256")
        .update(unHashedTokens)
        .digest("hex")

    const TokenExpiry = Date.now() * (20 * 60 * 1000)
    return { unHashedTokens, hashedTokens, TokenExpiry }
}

const User = mongoose.model("User", UserSchema);


export { User }