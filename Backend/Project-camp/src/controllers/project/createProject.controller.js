import { Project } from '../../models/project.models.js'
import { ProjectMember } from '../../models/projectmembers.models.js'
import { ApiResponse } from "../../utils/api-response.js";
import { ApiError } from "../../utils/api-error.js";
import { asyncHandler } from "../../utils/asyncHandler.js";
import { sendEMail, emailVerificationMailContent } from "../../utils/mail.js"
import mongoose from 'mongoose';

const createProject = asyncHandler(async (req, res) => {
    const {name, description} = req.body
    await Project.create({
        name, 
        description,
        cretaedBy: new mongoose.Types.ObjectId(req.user._id),
    })
})
const updateProject = asyncHandler(async (req, res) => {

})
const deleteProject = asyncHandler(async (req, res) => {

})

export {createProject, updateProject, deleteProject}