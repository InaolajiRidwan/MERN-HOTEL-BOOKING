import React, { useEffect, useState } from "react";
import { backendUrl } from "../App";
import axios from "axios";

const Reservation = () => {
  const [reservation, setReservation] = useState([]);

  useEffect(() => {
    const fetchReservation = async () => {
      try {
        const res = await axios.get(`${backendUrl}/api/reservations/get`);
        console.log(res.data.getReservation);
        setReservation(res.data.getReservation);
      } catch (error) {
        console.log(error);
      }
    };
    fetchReservation();
  }, []);

  return (
    <div className="min-h-screen">
      <h2 className="text-3xl font-bold text-gray-700 text-center mb-6">
        Room Reservations
      </h2>
      <div className="overflow-x-auto ">
        <table className="w-full shadow-lg rounded-xl">
          <thead>
            <tr className="bg-blue-600 text-left text-white">
              <th className="p-3 ">Room Name</th>
              <th className="p-3 ">Name</th>
              <th className="p-3 ">Email</th>
              <th className="p-3 ">Phone No</th>
              <th className="p-3 ">Guests</th>
              <th className="p-3 ">Check-in</th>
              <th className="p-3 ">check-out</th>
              <th className="p-3 ">Delete</th>
            </tr>
          </thead>
          <tbody>
            {reservation.length === 0 ? (
              <tr>
                <td colSpan="8" className="p-4 text-center">
                  No Reservation Available
                </td>
              </tr>
            ) : (
              reservation.map((reservation, index) => {
                return (
                  <tr key={index} className="border-b hover:bg-gray-200 ">
                    <td className="p-3">{reservation.roomName}</td>
                    <td className="p-3">{reservation.name}</td>
                    <td className="p-3">{reservation.email}</td>
                    <td className="p-3">{reservation.phone}</td>
                    <td className="p-3">{reservation.guest}</td>
                    <td className="p-3">{reservation.checkin}</td>
                    <td className="p-3">{reservation.checkout}</td>
                    <td className="p-3">
                      <button className="bg-red-500 text-white px-3 py-1 rounded cursor-pointer">Delete</button>{" "}
                    </td>
                  </tr>
                );
              })
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Reservation;
