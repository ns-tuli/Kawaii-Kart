import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import authRouter from "./routes/auth.js";
import userRoutes from "./routes/user.js";

const app = express();

dotenv.config();

// Middleware to parse incoming JSON requests
app.use(express.json());


app.use("/api/auth", authRouter);
app.use("/api/users", userRoutes);

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("DB Connection Successful!"))
  .catch((err) => {
    console.log("DB Connection Error:", err);
  });



  
app.listen(process.env.PORT || 8800, () => {
  console.log("Backend server is running on port", process.env.PORT || 5000);
});
