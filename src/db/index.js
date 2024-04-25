import mongoose from "mongoose";
import {DB_NAME} from "../constant.js";

const connectDB = async () => {
    try {
        console.log(process.env.MONGODB_URI + "\n logging the URI")
        const connectionInstance = await mongoose.connect
        (`${process.env.MONGODB_URI}/${DB_NAME}`)
        console.log(` Mongoose Connected !! ${connectionInstance.connection.host}`)
        // console.log(connectionInstance.connection.host)
    } catch (error) {
        console.error("MongoDB connection error" , error)
        process.exit(1);
    }
}

export default connectDB;