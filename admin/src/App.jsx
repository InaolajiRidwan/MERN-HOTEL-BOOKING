import React, { useEffect, useState } from "react";
import Login from "./components/Login";
import SideBar from "./components/SideBar";
import { Routes, Route } from "react-router-dom";
import AddHotel from "./pages/AddHotel";
import ListHotel from "./pages/ListHotel";
import Reservation from "./pages/Reservation";
import {ToastContainer} from "react-toastify"

export const backendUrl = "https://mern-hotel-booking-backend-lrbn.onrender.com";

export default function App() {
  const [token, setToken] = useState(localStorage.getItem("token"));
  useEffect(() => {
    localStorage.setItem("token", token);
  }, [token]);
  return (

    <div className="bg-white min-h-screen ">
      <ToastContainer />
      {!token ? (
        <div>
          <Login setToken={setToken} />
        </div>
      ) : (
        <>
          <div className="flex w-full">
            <SideBar setToken={setToken} />
            <div className="w-[70%] ml-[max(5vw,25px)] my-8 text-black text-base">
              <Routes>
                <Route path="/add" element={<AddHotel token={token} />} />
                <Route path="/list" element={<ListHotel token={token}/>} />
                <Route path="/reservation" element={<Reservation token={token} />} />
              </Routes>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
