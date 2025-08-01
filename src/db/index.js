import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const connectDB = async () => {
  try {
    const connectionInstance = await mongoose.connect(
      `${process.env.MONGO_URI}/${DB_NAME}`
    );
    console.log(
      "\nMongoDB connected successfully: ",
      connectionInstance.connection.host
    );
  } catch (error) {
    console.log("\nMONGODB connection error ", error);
    process.exit(1);
  }
};

export default connectDB;
