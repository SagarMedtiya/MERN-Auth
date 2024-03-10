import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();
const url = process.env.MONGODB_URI;
const connectDB = async ()=>{
    try{
        const conn = await mongoose.connect(url,{ useNewUrlParser: true, useUnifiedTopology: true});
        console.log(`MONGODB Connected: ${conn.connection.host}`);
    }
    catch(error){
        console.error(`Error:  ${error.message}`);
        process.exit(1);
    }
}


export default connectDB;


