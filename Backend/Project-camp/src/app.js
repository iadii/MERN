import express from 'express'
import cors from 'cors'
const app = express();

app.use(express.json({limit: "16kb"}))
app.use(express.urlencoded({extended:true}))
app.use(express.static("public"))
app.use(cors({
    origin: process.env.CORS_ORIGIN?.split(","),
    methods: ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
    allowedHeaders: ["Authorization", "Content-Type"]
}))

app.get('/insta', (req, res) => {
    res.send("")
})

export default app; 