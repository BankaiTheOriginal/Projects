import express from "express";
import userRoutes from "./routes/user.routes.js";
import { connectDB } from "./database/db.js";
import dotenv from "dotenv";
import authRoutes from "./routes/auth.routes.js";
dotenv.config();
const port = 3000;
const app = express();

app.get("/", (req, res) => {
  res.send("Hello World");
});
app.use(express.json());
app.set("json spaces", 2);
app.use("/users", userRoutes);
app.use("/api/auth", authRoutes);

connectDB();
app.listen(process.env.PORT || port, () => {
  console.log(`Listening on port ${port}`);
});
