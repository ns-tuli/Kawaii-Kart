import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

// Initialize Express app
const app = express();

// Configure dotenv to load environment variables
dotenv.config();

// MongoDB connection using environment variable
mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("DB Connection Successful!"))
  .catch((err) => {
    console.log("DB Connection Error:", err);
  });

// Start the server
app.listen(process.env.PORT || 8800, () => {
  console.log("Backend server is running on port", process.env.PORT || 5000);
});
