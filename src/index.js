import dotenv from "dotenv"; // require("dotenv").config();
import ConnectDB from "./db/index.js";

dotenv.config({
  path: "./env",
});
console.log(process.env);
ConnectDB();
