import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();

async function connectToDB() {
    try{
        await mongoose.connect('mongodb+srv://' + process.env.USER + ':' + process.env.PASSWORD + '@cluster0.nwu85fw.mongodb.net/todolistDB')
        console.log("Connection to DB Mongoose succeed.");
    }catch(err){
        console.log(err);
        console.log("Failed connecting to DB Mongoose.");
    }
}

export default connectToDB;
