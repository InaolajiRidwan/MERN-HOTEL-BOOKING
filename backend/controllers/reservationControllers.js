import reservationModel from "../models/reservationModel.js";

const createReservation = async (req, res) => {
  try {
    const { name, email, phone, checkin, checkout, guest, roomName, roomId } =
      req.body;

    if (
      !name ||
      !email ||
      !phone ||
      !checkin ||
      !guest ||
      !checkout ||
      !roomName ||
      !roomId
    ) {
      return res.status(400).json({
        message: "All field are required",
      });
    }

    

    const newReservation = new reservationModel({
      name,
      email,
      phone,
      checkin,
      checkout,
      guest,
      roomName,
      roomId,
    });

    await newReservation.save();

    res.status(201).json({
      message: "Reservation created successfully",
      reservation: newReservation,
    });
  } catch (error) {
    console.log(error);
    res.status(404).json({
      message: "Error creating reservation",
    });
  }
};
const getAllReservation = async (req, res) => {
  try {
    const getReservation = await reservationModel.find();
    res.status(200).json({
      message: "success",
      getReservation,
    });
  } catch (error) {
    console.log(error);
    res.status(404).json({
      message: "Error creating reservation",
    });
  }
};

const deleteReservation = async (req, res) => {
    try {
        const {id} = req.params
         await reservationModel.findByIdAndDelete(id)
         return res.status(200).json({
            message: "Reservation deleted successfully"
         })
    } catch (error) {
         console.log(error);
    res.status(404).json({
      message: "Error deleting reservation",
    });
    }
};

export { createReservation, getAllReservation, deleteReservation };
