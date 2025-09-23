import express from "express";
import {
  createReservation,
  getAllReservation,
  deleteReservation,
} from "../controllers/reservationControllers.js";

const reservationRoute = express.Router();

reservationRoute.post("/create", createReservation);
reservationRoute.get("/get", getAllReservation);
reservationRoute.delete("/delete/:id", deleteReservation);

export default reservationRoute;
