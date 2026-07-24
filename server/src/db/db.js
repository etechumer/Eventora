const mongoose = require('mongoose');
require('dotenv').config();

async function connectDB() {

    const mongoUri = process.env.MONGO_URI;
    try{
        await mongoose.connect(mongoUri)
        console.log("MongoDB connected successfully!");
    }catch(e){
        console.error("Failed to connect DB:", e);
        throw e;
    }
}

module.exports = connectDB;