import { Project } from '../../models/project.models.js'
import { ProjectMember } from '../../models/projectmembers.models.js'
import { ApiResponse } from "../../utils/api-response.js";
import { ApiError } from "../../utils/api-error.js";
import { asyncHandler } from "../../utils/asyncHandler.js";
import { sendEMail, emailVerificationMailContent } from "../../utils/mail.js"

const getProject = asyncHandler(async (req, res) => {
    
})

const getProjectById = asyncHandler(async (req, res) => {

})

export {getProject, getProjectById}