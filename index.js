import express from "express";
import cors from "cors";
import multer from "multer";
import {v4 as uuidv4} from "uuid";
import path from "path";

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
app.use((req, res, next)=>{
    res.header("Access-Control-Allow-Origin", "*");
    next()
})

// Express Milldleware
app.use(express.json());
app.use(express.urlencoded({extended:true}));

// Uploads Configuration
app.use("/uploads", express.static("uploads"));

// Multer Middleware
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, "./uploads")
    },
    filename: function(req, file, cb){
        cb(null, file.fieldname+"-"+uuidv4()+path.extname(file.originalname))
    }
})

// Multer Configuration
const upload = multer({
    storage: storage,
})

app.get('/', (req, res)=>{
    res.json({msg:"Video Streaming Server is Running"});
})



app.listen(8000, ()=>{
    console.log("Server Started: http://localhost:8000");
})