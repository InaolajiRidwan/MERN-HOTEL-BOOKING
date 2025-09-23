// import React, { useContext, useEffect } from "react";
// // import { roomData } from "../assets/assets";
// import { useParams } from "react-router-dom";
// import { RoomContext } from "../context/RoomContext";
// import {
//   FaUtensils,
//   FaWifi,
//   FaTv,
//   FaSwimmingPool,
//   FaConciergeBell,
// } from "react-icons/fa";
// import { backendUrl } from "../App";
// import axios from "axios";

// const HotelDetails = () => {
//   const { rooms, setRooms } = useContext(RoomContext);
//   console.log(rooms);
//   const { id } = useParams();

//   useEffect(() => {
//     const fetchRoomDetails = async () => {
//       try {
//         const response = await axios.get(`${backendUrl}/api/hotel/rooms/${id}`);
//         setRooms(response.data.hotel);
//         setFormData((prev) => ({
//           ...prev,
//           roomName: response.data.hotel.name,
//           roomId: response.data.hotel._id
//         }));
//       } catch (error) {
//         console.log(error);
//       }
//     };
//     fetchRoomDetails()
//   }, [id, setRooms]);

//   // const room = roomData.find((room) => {
//   //   return room.id === parseInt(id);
//   // });

//   return (
//     <div className="mx-auto max-w-7xl p-6 grid grid-cols-1  md:grid-cols-3 gap-8 mt-40 md:mt-30">
//       {/* left side  */}
//       <div className="md:col-span-2 space-y-6">
//         <div>
//           <h1 className="text-3xl font-bold ">{room.name}</h1>
//           <p className="text-xl text-lime-500 mt-1">${room.price}</p>
//         </div>
//         <img
//           src={room.image}
//           alt={room.name}
//           className="w-full rounded-lg shadow-md "
//         />
//         <div className="bg-gray-200 p-4 rounded-lg shadow-md ">
//           <h2 className="text-xl font-semibold mb-3">Amenities</h2>
//           <div className="grid grid-cols-2 gap-4 text-gray-700">
//             <div className="flex items-center gap-2">
//               <FaWifi /> wi-Fi
//             </div>
//             <div className="flex items-center gap-2">
//               <FaTv /> Cable-Tv
//             </div>
//             <div className="flex items-center gap-2">
//               <FaUtensils /> Restaurant
//             </div>
//             <div className="flex items-center gap-2">
//               <FaSwimmingPool /> Pool
//             </div>
//             <div className="flex items-center gap-2">
//               <FaConciergeBell /> Room service
//             </div>
//           </div>
//           <div className="bg-white p-4 mt-4">
//             <h2 className="text-lg font-semibold mb-2">Room description</h2>
//             <p className="text-gray-600 ">{room.description}</p>
//             <p className="text-gray-600 ">{room.description}</p>
//             <p className="text-gray-600 ">{room.description}</p>
//             <p className="text-gray-600 ">{room.description}</p>
//           </div>
//         </div>
//       </div>

//       {/* right side */}
//       <div className="bg-white p-6 mt-18 rounded-lg shadow-md ">
//         <h2 className="text-2xl font-bold mb-4">Book your stay</h2>
//         <form className="space-y-4">
//           <input
//             type="text"
//             placeholder="Name"
//             className="w-full border border-gray-300 p-3 rounded-lg outline-none "
//           />
//           <input
//             type="email"
//             placeholder="Email"
//             className="w-full border border-gray-300 p-3 rounded-lg "
//           />
//           <input
//             type="tel"
//             placeholder="Phone Number"
//             className="w-full border border-gray-300 p-3 rounded-lg outline-none "
//           />
//           <div>
//             <label htmlFor="date" className="font-bold">
//               check-In
//             </label>
//             <input
//               type="date"
//               name=""
//               id=""
//               className="w-full border border-gray-300 p-3 rounded-lg outline-none "
//             />
//           </div>

//           <div>
//             <label htmlFor="" className="font-bold">
//               Check-Out
//             </label>
//             <input
//               type="date"
//               name=""
//               id=""
//               className="w-full border border-gray-300 p-3 rounded-lg outline-none "
//             />
//           </div>
//           <div>
//             <label htmlFor="" className="font-bold">
//               Number of Guest
//             </label>
//             <select
//               name=""
//               id=""
//               className="w-full p-3 mb-3 border rounded-lg focus:ring focus:ring-blue-300 outline-none "
//             >
//               {[...Array(3).keys()].map((i) => (
//                 <option key={i + 1} value={i + 1}>
//                   {i + 1} Guest(s)
//                 </option>
//               ))}
//             </select>
//           </div>
//           <button
//             type="submit"
//             className="w-full bg-lime-400 text-white p-3 rounded-lg hover:bg-lime-300 transition"
//           >
//             Book Now
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default HotelDetails;

import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  FaUtensils,
  FaWifi,
  FaTv,
  FaSwimmingPool,
  FaConciergeBell,
} from "react-icons/fa";
import { backendUrl } from "../App";
import axios from "axios";

const HotelDetails = () => {
  const { id } = useParams();

  // ✅ Single room state
  const [room, setRoom] = useState(null);

  // ✅ Booking form state (all fields in one object)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    checkIn: "",
    checkOut: "",
    guests: 1,
    roomName: "",
    roomId: "",
  });

  // ✅ Fetch hotel details
  useEffect(() => {
    const fetchRoomDetails = async () => {
      try {
        const response = await axios.get(`${backendUrl}/api/hotel/rooms/${id}`);
        setRoom(response.data.hotel);

        // Pre-fill roomName + roomId for booking
        setFormData((prev) => ({
          ...prev,
          roomName: response.data.hotel.name,
          roomId: response.data.hotel._id,
        }));
      } catch (error) {
        console.log(error);
      }
    };
    fetchRoomDetails();
  }, [id]);

  // ✅ Handle form submission
  const handleReservation = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(`${backendUrl}/api/reservations/create`, formData);
      console.log("Reservation successful:", res.data);
      alert("Reservation successful!");
    } catch (error) {
      console.error("Reservation failed:", error);
      alert("Reservation failed. Please try again.");
    }
  };

  return (
    <div className="mx-auto max-w-7xl p-6 grid grid-cols-1 md:grid-cols-3 gap-8 mt-40 md:mt-30">
      {/* left side */}
      <div className="md:col-span-2 space-y-6">
        {room ? (
          <>
            <div>
              <h1 className="text-3xl font-bold">{room.name}</h1>
              <p className="text-xl text-lime-500 mt-1">${room.price}</p>
            </div>
            <img
              src={room.image}
              alt={room.name}
              className="w-full rounded-lg shadow-md"
            />
            <div className="bg-gray-200 p-4 rounded-lg shadow-md">
              <h2 className="text-xl font-semibold mb-3">Amenities</h2>
              <div className="grid grid-cols-2 gap-4 text-gray-700">
                <div className="flex items-center gap-2">
                  <FaWifi /> Wi-Fi
                </div>
                <div className="flex items-center gap-2">
                  <FaTv /> Cable TV
                </div>
                <div className="flex items-center gap-2">
                  <FaUtensils /> Restaurant
                </div>
                <div className="flex items-center gap-2">
                  <FaSwimmingPool /> Pool
                </div>
                <div className="flex items-center gap-2">
                  <FaConciergeBell /> Room service
                </div>
              </div>
              <div className="bg-white p-4 mt-4">
                <h2 className="text-lg font-semibold mb-2">Room description</h2>
                <p className="text-gray-600">{room.description}</p>
              </div>
            </div>
          </>
        ) : (
          <p>Loading room details...</p>
        )}
      </div>

      {/* right side */}
      <div className="bg-white p-6 mt-18 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-4">Book your stay</h2>
        <form onSubmit={handleReservation} className="space-y-4">
          <input
            type="text"
            placeholder="Name"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="w-full border border-gray-300 p-3 rounded-lg outline-none"
          />
          <input
            type="email"
            placeholder="Email"
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
            className="w-full border border-gray-300 p-3 rounded-lg"
          />
          <input
            type="tel"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={(e) =>
              setFormData({ ...formData, phone: e.target.value })
            }
            className="w-full border border-gray-300 p-3 rounded-lg outline-none"
          />
          <div>
            <label htmlFor="checkIn" className="font-bold">
              Check-In
            </label>
            <input
              type="date"
              id="checkIn"
              value={formData.checkIn}
              onChange={(e) =>
                setFormData({ ...formData, checkIn: e.target.value })
              }
              className="w-full border border-gray-300 p-3 rounded-lg outline-none"
            />
          </div>

          <div>
            <label htmlFor="checkOut" className="font-bold">
              Check-Out
            </label>
            <input
              type="date"
              id="checkOut"
              value={formData.checkOut}
              onChange={(e) =>
                setFormData({ ...formData, checkOut: e.target.value })
              }
              className="w-full border border-gray-300 p-3 rounded-lg outline-none"
            />
          </div>
          <div>
            <label htmlFor="guests" className="font-bold">
              Number of Guest
            </label>
            <select
              id="guests"
              value={formData.guests}
              onChange={(e) =>
                setFormData({ ...formData, guests: e.target.value })
              }
              className="w-full p-3 mb-3 border rounded-lg focus:ring focus:ring-blue-300 outline-none"
            >
              {[...Array(3).keys()].map((i) => (
                <option key={i + 1} value={i + 1}>
                  {i + 1} Guest(s)
                </option>
              ))}
            </select>
          </div>
          <button
            type="submit"
            className="w-full bg-lime-400 text-white p-3 rounded-lg hover:bg-lime-300 transition"
          >
            Book Now
          </button>
        </form>
      </div>
    </div>
  );
};

export default HotelDetails;
