import { Project } from '../../models/project.models.js'
import { ProjectMember } from '../../models/projectmembers.models.js'
import { ApiResponse } from "../../utils/api-response.js";
import { ApiError } from "../../utils/api-error.js";
import { asyncHandler } from "../../utils/asyncHandler.js";
import { sendEMail, emailVerificationMailContent } from "../../utils/mail.js"

const addMembersToProject = asyncHandler(async (req, res) => {

})
const getMembersToProject = asyncHandler(async (req, res) => {

})
const updateMemberRole = asyncHandler(async (req, res) => {

})
const deleteMember = asyncHandler(async (req, res) => {

})

export {addMembersToProject, getMembersToProject, updateMemberRole, deleteMember}