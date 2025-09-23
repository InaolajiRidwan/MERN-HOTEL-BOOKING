import express from "express";
import cors from "cors";
import "dotenv/config";
import connectDb from "./config/mongoDb.js";
import connectCloudinary from "./config/cloudinary.js";
import hotelRouter from "./routes/hotelRoute.js";
import userRouter from "./routes/adminRoutes.js";
import reservationRoute from "./routes/reservationRoute.js";
import dotenv from "dotenv";
dotenv.config();

const app = express();

const port = process.env.PORT || 4000;

connectDb();
connectCloudinary();

app.use(cors());
app.use(express.json());

app.use("/api/hotel", hotelRouter);
app.use("/api/reservations", reservationRoute);
app.use("/api/user", userRouter);

app.get("/", (req, res) => {
  res.send("API is working");
});

app.listen(port, () => {
  console.log(`server is running  🏃‍♀️.....on  ${port}`);
});
