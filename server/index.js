import express from "express";
import * as dotenv from "dotenv";
import cors from "cors";

import connectDB from "./mongodb/connect.js";
import postRoutes from "./routes/postRoutes.js";
import dalleRoutes from "./routes/dalleRoutes.js";

// To read dotenv file
dotenv.config();

const app = express();
app.use(cors());
app.use(express.json({ limit: "50mb" }));
// connecting to api(s) from the files
app.use("/api/v1//post", postRoutes);
app.use("/api/v1/dalle", dalleRoutes);

// Route
app.get("/", async (req, res) => {
  res.send("Hello from Dall-E");
});

// Connecting to the server
const startServer = async (req, res) => {
  try {
    connectDB(process.env.MONGODB_URL);
    app.listen(8080, () =>
      console.log("Server has started on post http://localhost:8080 ")
    );
  } catch (error) {
    console.log(error);
  }
};

startServer();
