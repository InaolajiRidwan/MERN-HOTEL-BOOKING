import React, { useState } from "react";
import { backendUrl } from "../App";
import axios from "axios";

const Login = ({ setToken }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState(""); // To show login errors

  const adminLoginHandler = async (e) => {
    e.preventDefault();
    setErrorMsg(""); // Reset error on submit
    try {
      const res = await axios.post(`${backendUrl}/api/user/admin`, {
        email,
        password,
      });

      if (res.data.message === "success") {
        setToken(res.data.token);
        localStorage.setItem("token", res.data.token);
      } else {
        setErrorMsg(res.data.message || "Login failed");
      }
    } catch (error) {
      // Improved error logging
      if (error.response) {
        setErrorMsg(error.response.data.message || "Login failed");
      } else {
        setErrorMsg(error.message);
      }
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-md rounded-lg px-8 py-6 w-full max-w-md">
        <h1 className="text-2xl font-bold text-center text-gray-800 mb-4">
          Admin Login
        </h1>

        {errorMsg && (
          <p className="text-red-600 text-sm mb-4 text-center">{errorMsg}</p>
        )}

        <form onSubmit={adminLoginHandler}>
          <div className="mb-4">
            <label className="text-sm font-semibold text-gray-600 mb-2 block">
              Email Address
            </label>
            <input
              type="email"
              placeholder="Enter admin email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:border-b-gray-800"
              required
            />
          </div>

          <div className="mb-4">
            <label className="text-sm font-semibold text-gray-600 mb-2 block">
              Password
            </label>
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:border-b-gray-800"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full px-3 py-4 text-lg font-bold bg-blue-900 rounded-md text-white cursor-pointer"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
