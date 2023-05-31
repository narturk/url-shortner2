import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();

async function connectToDB() {
    try{
        await mongoose.connect('mongodb://' + process.env.BASE + '/url-shortener');
        console.log("Connection to DB Mongoose succeed.");
        // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
    }catch(err){
        console.log(err);
        console.log("Failed connecting to DB Mongoose.");
    }
}

export default connectToDB;
