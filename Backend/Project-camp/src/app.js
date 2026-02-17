import express from 'express'
import cors from 'cors'

import healthCheck from './routes/healthCheck.routes.js';
import authRouter from './routes/auth.routes.js'

const app = express();

app.use(express.json({limit: "16kb"}))
app.use(express.urlencoded({extended:true}))
app.use(express.static("public"))
app.use(cors({
    origin: process.env.CORS_ORIGIN?.split(","),
    methods: ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
    allowedHeaders: ["Authorization", "Content-Type"]
}))

const prefix = '/api/v1'
app.use(`${prefix}/healthcheck`, healthCheck)

// auth
app.use(`${prefix}/auth`, authRouter)

app.get('/', (req, res) => {
    res.send("hii")
})

export default app;     