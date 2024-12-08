import { connect } from "mongoose";
import config from '../config.js'

const mongoConnect=async () => {
  try {
    const connection=await connect(config.mongo_url,{
        dbName:"cafelin"
    })
    if (connection) {
        console.log("Connected to MongoDB");
      } else {
        console.log("Failed to connect to MongoDB");
      }
  } catch (error) {
    
    console.log("MongoDB connection error:", error.message);
  }
}

export default mongoConnect;
