// require('dotenv').config({path: './env'})

import dotenv from "dotenv";

// import mongoose from 'mongoose';
// import {DB_NAME} from "./constants";

import connectDB from './db/index.js';

dotenv.config({
    path: './env'
})

connectDB()
.then(()=>{
    app.listen(process.env.PORT || 8000, ()=>{
        console.log('Server listening on port : +'+process.env.PORT)
    })
})
.catch((err) => {
    console.error("Mongo DB connection error: " + err)
})









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