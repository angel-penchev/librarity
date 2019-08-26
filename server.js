const mongoose = require("mongoose");
const dotenv = require("dotenv");
const express = require("express");
const app = express();
const port = 3000;

// Import Routes
const userRoute = require("./server/routes/user");

// Connecting to database
dotenv.config();
mongoose.connect(
    process.env.DB_CONNECT,
    { useNewUrlParser: true },
    () => console.log("Database connection established!")
)

// Middleware
app.use(express.json());

// Route middlewares
app.use("/api/user", userRoute);

app.listen(port, () => {
    console.log("Server started successfully!");
})