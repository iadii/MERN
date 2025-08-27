# MERN Learning Repository

This repository is a hands-on playground for learning the MERN stack end to end.

- Frontend: React (Vite, plain React exercises)
- Backend: Node.js + Express
- Databases: MongoDB and PostgreSQL

We are learning only in this repo—each subfolder captures day-by-day progress, experiments, and mini-projects.

## Project Layout

- Backend/
  - Placeholder for Express APIs and server code (to be added as we progress)
- Frontend/


Tip: Many day folders contain one or more subprojects. Open the specific subproject folder to install and run it.

## Prerequisites

- Node.js (LTS recommended) and npm or pnpm
- MongoDB (local or cloud, e.g., MongoDB Atlas) for NoSQL exercises
- PostgreSQL for SQL exercises

## Running a Frontend Project (example)

1. Navigate to a project folder, e.g.:
   - Frontend/Day04/vite-project
2. Install dependencies:
   - npm install
3. Start the dev server:
   - npm run dev
4. Open the local URL printed in the terminal.

Repeat the same steps for any other frontend subproject (choose its folder first).

## Backend (Express + Node.js)

The Backend/ folder will host Express apps as we build them.

Typical workflow (once code is added):
- Create an .env file for secrets like DB connection strings
- Install dependencies: npm install
- Start dev server: npm run dev or nodemon index.js (depends on setup)

## Databases

We will use both MongoDB and PostgreSQL to learn different data models:
- MongoDB: connect via a URI (e.g., MONGODB_URI) and use Mongoose or native driver
- PostgreSQL: connect via a URL (e.g., DATABASE_URL) and use a client/ORM such as pg, Prisma, or Sequelize

Environment variables should be stored in .env files (never commit secrets).

## Goals

- Build comfort with React fundamentals and tooling
- Learn how to design and expose REST APIs with Express
- Practice data modeling and querying in MongoDB and PostgreSQL
- Understand environment-based configuration and basic project structure

Happy learning!