import hotelModel from "../models/hotelModel.js";
import { v2 as cloudinary } from "cloudinary";

const addHotel = async (req, res) => {
  try {
    const { name, price, description } = req.body;
    const image = req.file;
    let imageUrl = "";
    if (image) {
      let result = await cloudinary.uploader.upload(image.path, {
        resource_type: "image",
      });
      imageUrl = result.secure_url;
    } else {
      imageUrl = "https://via.placeholder.com/150";
    }

    const hotelData = {
      name,
      description,
      price: Number(price),
      image: imageUrl,
      date: Date.now(),
    };
    const hotel = new hotelModel(hotelData);
    await hotel.save();

    res.status(201).json({
      success: true,
      message: "hotel room added successfully",
    });
  } catch (error) {
    console.log(error);
    res.json({
      success: false,
      message: "Error adding hotel room",
    });
  }
};

const listHotel = async (req, res) => {
  try {
    const hotels = await hotelModel.find();

    res.status(200).json({
      success: true,
      message: "success",
      hotels,
    });
  } catch (error) {
    console.log(error);
    res.json({
      success: false,
      message: "Error listing hotel room",
    });
  }
};

const removeHotel = async (req, res) => {
  try {
    const { _id } = req.body;

    await hotelModel.findByIdAndDelete(_id);
    res.status(200).json({
      message: "hotel room removed successfully ",
    });
  } catch (error) {
    console.log(error);
    res.json({
      success: false,
      message: "Error deleting hotel room",
    });
  }
};

const singleHotel = async (req, res) => {
  try {
    const { id } = req.params;
    const hotel = await hotelModel.findById(id);

    if (!hotel) {
      return res.status(404).json({
        success: false,
        message: "Room not found",
      });
    }

    res.status(200).json({
      success: true,
      hotel, // ✅ sends { _id, name, price, description, image, date }
    });
  } catch (error) {
    console.log(error);
    res.status(400).json({
      success: false,
      message: "Hotel details not fetched",
    });
  }
};

export { addHotel, listHotel, removeHotel, singleHotel };
