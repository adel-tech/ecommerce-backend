const express = require("express");
const cors = require("cors");
//const dotenv = require("dotenv");
const connectDB = require("./config/db");

const path = require("path")
require("dotenv").config({
  path: "C:/Users/USER/Desktop/projects/ecomm/backend/.env"
});

const productRoutes = require("./routes/productRoutes");
const paymentRoutes = require("./routes/paymentRoutes");


const app = express();

// Connect to MongoDB
connectDB();

// Middleware
app.use(cors());
app.use(express.json());

app.use("/api/products", productRoutes);
app.use("/api/payment", paymentRoutes);


// Test route
app.get("/", (req, res) => {
  res.send("API is running...");
});

const PORT = process.env.PORT || 5000;

console.log("Loaded MONGO_URI:", process.env.MONGO_URI);


app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
