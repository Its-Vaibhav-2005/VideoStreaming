import express from "express";
import cors from "cors";
import multer from "multer";
import {v4 as uuidv4} from "uuid";

const app = express();

// CORS Configuration
app.use(cors({
    origin: [
        "http://localhost:3000",
        "http://localhost:5173"
    ],
    credentials: true
}))
// Custome Middleware

app.get('/', (req, res)=>{
    res.json({msg:"Video Streaming Server is Running"});
})



app.listen(8000, ()=>{
    console.log("Server Started: http://localhost:8000");
})