import mongoose, { connect } from "mongoose";
const connectDB = async () => {
    const mongodb = await connect(process.env.MONGO_URL);
    if(mongodb) {
        console.log("mongodb connected");
    }
}

export default connectDB;