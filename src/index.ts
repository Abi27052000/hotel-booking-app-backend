import express, { Request, Response } from 'express';
import cors from 'cors';
import "dotenv/config";
import mongoose from 'mongoose';

const connectToDB = async () => {
    await mongoose.connect(process.env.MONGODB_CONNECTION_STRING as string).then(
        () => {console.log("connected to db")},
    )
}

connectToDB();

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.get('/api/test',async (req:Request,res:Response)=>{
    res.json({
        message:" jsklkk miwjikje"
    })
})

app.listen(7000, () => {
    console.log("server started at localhost 7000")
})