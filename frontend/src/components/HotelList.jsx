import React, { useContext } from "react";
import { RoomContext } from "../context/RoomContext";
import {Link} from "react-router-dom"
import {
  FaUserFriends,
  FaWifi,
  FaSwimmingPool,
  FaParking,
  FaUtensils,
} from "react-icons/fa";

const amenitiesList = [
  { label: "1-2 persons", icon: <FaUserFriends className="text-gray-600" /> },
  { label: "Free WiFi", icon: <FaWifi className="text-gray-600" /> },
  {
    label: "Swimming Pool",
    icon: <FaSwimmingPool className="text-gray-600" />,
  },
  { label: "Free Parking", icon: <FaParking className="text-gray-600" /> },
];

const HotelList = () => {
  const { rooms } = useContext(RoomContext);
 
 
  return (
    <div className="bg-[#f7f0eb] py-16 px-4 ">
      <div className="max-w-6xl mx-auto" >
        <h2 className="text-4xl font-serif text-center mb-12 text-gray-800">
          Book your stay and <br /> relax in luxury
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {rooms && rooms.length > 0 ? (
              rooms.map((room, index) => {
                const { _id, image, name, price } = room;
               
                return (
                  <div key={index} className="bg-white shadow rounded-lg overflow-hidden ">
                    <Link to={`/room/${_id}`}>
                      <img src={image} alt="" loading="lazy" className="w-full h-80 object-cover" />
                    </Link>

                    <div className="p-5 ">
                      <h3 className="text-2xl font-semibold text-gray-800 mb-1">{name}</h3>
                      <p className="text-gray-600 text-lg mb-4">${price}</p>
                      <div className="grid grid-cols-2 gap-4 text-base text-gray-700 ">
                        {amenitiesList.map((amenity, idx) => {
                          return (
                            <div key={idx} className="flex items-center gap-2 ">
                              {amenity.icon} <span>{amenity.label}</span>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                );
              })
          ) : (
            <div className="text-gray-500 text-center col-span-full">No rooms available</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default HotelList;
