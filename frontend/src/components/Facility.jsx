import React from "react";
import {
  FaShuttleVan,
  FaConciergeBell,
  FaWifi,
  FaSwimmingPool,
  FaUtensils,
} from "react-icons/fa";

const Facility = () => {
  const services = [
    {
      icon: <FaShuttleVan size={32} />,
      title: "Pickup & Drop",
      desc: "Convenient airport shuttle services.",
    },
    {
      icon: <FaConciergeBell size={32} />,
      title: "24/7 Concierge",
      desc: "Always ready to assist you anytime.",
    },
    {
      icon: <FaWifi size={32} />,
      title: "Free WiFi",
      desc: "High-speed internet available everywhere.",
    },
    {
      icon: <FaSwimmingPool size={32} />,
      title: "Swimming Pool",
      desc: "Relax and enjoy our outdoor pool.",
    },
    {
      icon: <FaUtensils size={32} />,
      title: "Restaurant",
      desc: "Delicious meals served daily.",
    },
  ];

  return (
    <div className="bg-[#f8f0eb] py-16 px-4 md:px-20">
      <div className=" md:mx-auto md:max-w-7xl">
        <div className="mb-12">
          <p className="text-sm text-center md:text-start tracking-widest uppercase text-gray-500">
            Services
          </p>
          <h2 className="text-4xl text-center md:text-start  font-serif font-semibold text-gray-800">
            Facilities & Services
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-10 grid-col-1">
          {services.map((service, idx) => {
            return (
              <div key={idx} className="flex flex-col items-center md:items-start space-y-3">
                <div className="bg-lime-400 rounded-full p-5 text-black">{service.icon}</div>
                <h3 className="text-2xl font-semibold text-gray-800">{service.title}</h3>
                <p className="text-gray-500 max-w-xs text-sm">{service.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Facility;
