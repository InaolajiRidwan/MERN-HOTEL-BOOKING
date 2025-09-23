import mongoose from "mongoose";

const reservationSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  checkin: { type: String, required: true },
  checkout: { type: String, required: true },
  guest: { type: String, required: true },
  roomName: { type: String, required: true },
  roomId: { type: String, required: true },
});

// const reservationModel = mongoose.model.Reservation || mongoose.model("Reservation", reservationSchema)

export default mongoose.model("Reservation", reservationSchema);
