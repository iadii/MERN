import mongoose, { Schema } from "mongoose";

const ProjectSchema = new Schema({
     name: {
        type: String,
        required: true
     }
}, {timestamps: true})