import React, { createContext, useEffect, useState } from "react";
import { roomData } from "../assets/assets";
import { backendUrl } from "../App";
import axios from "axios";

export const RoomContext = createContext();
const RoomContextProvider = ({ children }) => {
  const [rooms, setRooms] = useState(roomData);

  const fetchHotelRoom = async () => {
    try {
      const res = await axios.get(`${backendUrl}/api/hotel/list`);

      if (res.data.success) {
        setRooms(res.data.hotels);
      } else {
        console.log(res.data.message);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchHotelRoom();
  }, []);

  return (
    <RoomContext.Provider value={{ rooms, setRooms }}>
      {children}
    </RoomContext.Provider>
  );
};

export default RoomContextProvider;
