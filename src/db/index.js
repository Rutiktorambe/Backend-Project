import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const ConnectDB = async () => {
  try {
    const connectionInstance = await mongoose.connect(
      `${process.env.MONGODB_URI}/${DB_NAME}`
    );
    console.log(
      `The MongoDB is connected!!!, DB hosts: ${connectionInstance.connection.host}`
    );
  } catch (error) {
    console.log("MongoDB is not connected!!! :", error);
    process.exit(1);
  }
};

export default ConnectDB;
