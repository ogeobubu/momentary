import express from "express";
import mongoose from "mongoose";
import "dotenv/config";
import cors from "cors";
import morgan from "morgan";
import imageRouter from "./routes/imageRoutes.js";
import path from "path";

const app = express();

app.use(cors());
app.use(morgan("dev"));
app.use(express.json());
app.use("/api/images", imageRouter);

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "./dist", "index.html"));
  });
}

const connection_uri = process.env.DATABASE;

mongoose
  .connect(connection_uri)
  .then(() => {
    return console.log("MongoDB has successfully connected.");
  })
  .catch((error) => {
    return console.log("MongoDB has failed to successfully connect.");
  });

const PORT = process.env.PORT || process.env.PORT_PATH;

app.listen(PORT, () => {
  return console.log(`Server running on port: ${PORT}`);
});
