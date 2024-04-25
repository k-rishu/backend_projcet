// require('dotenv').config({path: './env'})

import dotenv from "dotenv";

// import mongoose from 'mongoose';
// import {DB_NAME} from "./constants";

import connectDB from './db/index.js';

dotenv.config({
    path: './env'
})

connectDB();









/*
import expres from 'express';

const app = express();

;( async()=>{
    try {
        await mongoose.connect(`${process.env.MONGODG_URI}/${DB_NAME}`)
        app.on('error', (error) => {
            console.log("Error" , error);
            throw error
        })

        app.listen(process.env.PORT, ()=>console.log("Listen" , process.env.PORT))
    } catch (error) {
        console.error("Error: ", error);
        throw err
    }
})()
*/