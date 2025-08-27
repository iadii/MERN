# MERN Learning Repo

A single place to learn and practice the MERN stack.

- Frontend: React (mostly Vite-powered projects)
- Backend: Node.js + Express
- Databases: MongoDB and PostgreSQL

We are learning only in this repo. Each folder represents daily progress, experiments, and mini-projects.

## Repository Structure

- Backend/
  - Express server code will live here (to be added as we progress)
- Frontend/
  - React projects will live here, each in its own folder 

## Prerequisites

- Node.js (LTS recommended) and npm (or pnpm)
- MongoDB (local or Atlas) for NoSQL practice
- PostgreSQL for SQL practice

## Quick Start: Frontend Projects

1. Choose a project folder, for example:
   - Frontend/Day04/vite-project
   - Frontend/Day01/01vitereact
2. Install dependencies:
   - npm install
3. Start the dev server:
   - npm run dev
4. Open the local URL shown in the terminal.

Repeat the same steps for any other frontend subproject (cd into that folder first).

## Quick Start: Backend (Express + Node.js)

Once we add backend code under Backend/:

1. cd Backend
2. Install dependencies: npm install
3. Create a .env file for secrets (DB connection URIs, etc.)
4. Start the dev server: npm run dev (or nodemon index.js depending on setup)

## Databases and Environment Variables

- MongoDB: use MONGODB_URI (e.g., mongodb+srv://... or mongodb://localhost:27017/dbname)
- PostgreSQL: use DATABASE_URL (e.g., postgresql://user:pass@localhost:5432/dbname)
- Keep secrets in .env files; never commit them. Ensure .env is in .gitignore.

## Goals

- Practice React fundamentals and tooling
- Build and expose REST APIs with Express
- Learn data modeling and querying with MongoDB and PostgreSQL
- Understand environment-based configuration and clean project structure

Happy learning and building!