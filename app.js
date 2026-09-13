import express from "express";
import mongoose from "mongoose";
import blogRoute from "./routes/blog-routes.js";
import router from "./routes/user-routes.js";
import cors from "cors";
import dotenv from "dotenv"
import dns from "dns"

dotenv.config()

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/user", router);
app.use("/api/blog", blogRoute);

dns.setServers(["1.1.1.1", "8.8.8.8"])

mongoose.connect(process.env.MONGODB_URL)
  .then(() => app.listen(5000))
  .then(() =>
    console.log("Connected TO Database and Listening TO Localhost 5000")
  )
  .catch((err) => console.log(err));
