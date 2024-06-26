//mongodb+srv://ishamgupta711:ishamgupta711@cluster0.xczuqpv.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";
import authRoute from "./routes/auths.js"
import  postsRoute from "./routes/upload.js";
import usersRoute from "./routes/users.js"
import productRoute from "./routes/upload.js"
import getAllroute from "./routes/getall.js"
const app = express();
dotenv.config();
app.use(express.json());
const port = process.env.PORT || 5000;
const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO);
    console.log("Connected to mongoDB.");
  } catch (error) {
    throw error;
  }
};

app.use(
  cors({
    origin: [
      "http://localhost:3000",
      "http://localhost:3001",
    ],
    credentials: true,
  })
);

// mongoose.connection.on("disconnected", () => {
//   console.log("mongoDB disconnected!");
// });

app.use("/api/auth",authRoute);
app.use("/api/posts",postsRoute);
app.use("/api/users",usersRoute);
app.use("/api/upload",productRoute);
app.use("/api/products",getAllroute);

app.listen(port, () => {
    connect();
    console.log("Connected to backend is 8000.");
});