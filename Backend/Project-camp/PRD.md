# Product Requirement Document (PRD)

## Project Camp Backend

### 1 . Product Overview
**Product Name:** Project Camp Backend <br>
**Version** : 1.0.0 <br>
**Product Type** : Backend APi for project Management System

Project Camp Backend is a RESTful API service designed to support collaborative project management. The System enables teams to organise projects, manage tasks with subtasks, maintain project notes, and handles user authentication with role-based access control.


### 2. Target Users

* **Project Administrators**: Create and manage projects, assign roles, oversee all project activities
* **Project Admins**: Manage task and project contents within assigned projects
* **Team Members**: View projects, update task compeletion status, access project informations

### 3. Core Features

#### 3.1 User Authentication and Authorization

* **User Registration**: Account Creation with email verification
* **User Login**: Secure authentication with jwt tokens
* **Password Management**: Change password, forgot/reset password functionality
* **Email Verification**: Account verification via Email token
* **Token Management**: Access Token refresh mechanism
* **Role-Based Access Control**: Three-tier permission system (Admin, Project Admin, Member)

#### 3.2 Project Management

* **Project Creation**: Create new project with name and description
* **Project Listing**: View all projects user has access to member count
* **Project Details**: Access individual project in formation
* **Project Updates**: Modify project information (Admin only)
* **Project Deletion**: Remove Projects(Admin only)

#### 3.3 Team Member Management

* **Member Addition**: Invite users to projects via email
* **Member Listing**: View all Project team members
* **Role Management**: Update Member roles withing projects (Admin only)
* **Member Removal**: Remove any team member from project (Admin only)

#### 3.4 Task Management
* **Task Creation**: Create tasks with title, description and assignee
* **Task Listing**: View all tasks within projects
* **Task Details**: Access individual task information
* **Task Updates**: Modify task information ans status
* **Task Deletion**: Remove tasks from project
* **File Attcahments**: supports for multiple file attachments on tasks
* **Task Assignments**: Assign tasks to specific team members
* **Status Tracking**: Thre-state status system (todo, in-progress, Done)