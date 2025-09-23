import React, { useState } from "react";
import default_img from "../assets/uploadimage.png";
import axios from "axios";
import { backendUrl } from "../App";

const AddHotel = ({ token }) => {
  const [image, setImage] = useState(null);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");

  const roomSubmission = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append("name", name);
      formData.append("description", description);
      formData.append("price", price);
      if (image) {
        formData.append("image", image);
      }

      const res = await axios.post(`${backendUrl}/api/hotel/add`, formData, {headers: token})
      if(res.data.success ){
        console.log(res.data.message)
        setName("")
        setDescription("")
        setImage(null)
        setPrice("")
      }
      
    } catch (error) {
      console.log(error)
    }
  };

  return (
    <div>
      <form onSubmit={roomSubmission} className="flex flex-col items-start gap-1 ">
        <p>Upload Image</p>
        <div>
          <label htmlFor="image">
            <img
              src={!image ? default_img : URL.createObjectURL(image)}
              alt=""
              className="w-32 cursor-pointer "
            />
            <input
              type="file"
              id="image"
              onChange={(e) => setImage(e.target.files[0])}
              required
              hidden
            />
          </label>
        </div>
        <div className="w-full">
          <p className="mb-2 text-[22px]">Room Name</p>
          <input
            type="text"
            placeholder="enter room name "
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="w-full max-w-[500px] p-4 border border-gray-300 rounded"
          />
        </div>
        <div className="w-full">
          <p className="mb-2 text-[22px]">Room Description</p>
          <input
            type="text"
            placeholder="enter room description "
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
            className="w-full max-w-[500px] p-4 border border-gray-300 rounded"
          />
        </div>
        <div className="w-full">
          <p className="mb-2 text-[22px]">Room Price</p>
          <input
            type="number"
            placeholder="40"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            required
            className="w-full max-w-[500px] p-4 border border-gray-300 rounded no-spinner"
          />
        </div>
        <button type="submit" className="mt-6 px-20 py-3 bg-blue-500 rounded">
          Add Room{" "}
        </button>
      </form>
    </div>
  );
};

export default AddHotel;
