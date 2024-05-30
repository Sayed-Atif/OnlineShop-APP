import mongoose from "mongoose";   // import mongoose module for MongoDB connection
// import dotenv from 'dotenv'   // import dotenv module for environment variables
// dotenv.config()

const dbConnection = async () => {
    try {
        const Complete_URI = process.env.MONGO_URI
        const conn = await mongoose.connect(Complete_URI);
        console.log(`Connected to MongoDB Cluster: ${conn.connection.host}`);
    } catch (error) {
        console.error(`Error: ${error.message}`);
        process.exit(1);
    }
}


export default dbConnection
