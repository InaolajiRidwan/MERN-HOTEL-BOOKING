import express from "express";
import {
  addHotel,
  listHotel,
  removeHotel,
  singleHotel,
} from "../controllers/hotelControllers.js";
import upload from "../middleware/multer.js";


const hotelRouter = express.Router();

hotelRouter.post("/add", upload.single("image"), addHotel);
hotelRouter.get("/list", listHotel);
hotelRouter.post("/remove", removeHotel);
hotelRouter.get("/rooms/:id", singleHotel);

export default hotelRouter;
