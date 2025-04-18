import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./db/db.js";
import errorHandler from "./middleware/errorMiddleware.js";
import userRoutes from "./routes/userRoute.js";
import eventRoutes from "./routes/eventRoute.js";
import adminRoutes from "./routes/adminRoute.js";



// Load environment variables
dotenv.config();

// Initialize Express app
const app = express();

// Connect to MongoDB
connectDB();

// Middleware
app.use(cors({
    origin: "https://open-heaven-60614b89b4ca.herokuapp.com",
    credentials: true,
    optionsSuccessStatus: 200
  }));
app.use(express.json());

// Routes
app.use("/user", userRoutes);
app.use("/event", eventRoutes);
app.use("/admin", adminRoutes);

//global error handling
app.use(errorHandler);

// Port Configuration
const PORT = process.env.PORT || 8000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
