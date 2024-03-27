"use client";

import { Button } from "@/components/ui/button";
import { useParams, useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

const StorageSlugPage = () => {
  const router = useRouter();
  const params = useParams();

  // console.log(params.slug);

  const [room, setRoom] = useState({});

  const [editMode, setEditMode] = useState(false);
  const [formData, setFormData] = useState({});

  useEffect(() => {
    fetchRoom();
  }, [params]);

  const fetchRoom = async () => {
    try {
      const res = await fetch(`http://localhost:3000/api/rooms/${params.slug}`);

      // console.log(await res.json());

      const data = await res.json();
      setRoom(data);
      console.log(data.temperature);
      setFormData(data);
      console.log(formData.temperature);
      console.log(room, "--");
    } catch (error) {
      console.error("Error fetching room:", error);
    }
  };

  const handleEdit = () => {
    setEditMode(true);
  };

  const handleConfirm = () => {
    setEditMode(false);
    // Perform any save/update operation with formData
    console.log("Form data:", formData);
    updateRoom();
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  /////////////////////////////////////////////////

  const updateRoom = async () => {
    try {
      const res = await fetch(`/api/rooms/${params.slug}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify(formData),
      });

      const updatedRoom = await res.json();
      console.log(updatedRoom);

      setFormData(updatedRoom);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="bg-[#DDE6ED] flex min-h-screen flex-col items-center p-24">
      Slug Store
      <div className="relative w-full">
        <img
          className="w-full h-56 object-cover"
          alt="img"
          src="https://images.unsplash.com/photo-1708955743956-da1bb7f6fe6a?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        />

        <div className="bg-black bg-opacity-50 absolute bottom-0 left-0 p-2 text-white">
          <p>{room?.title}</p>
          <p>Location: {room?.location}</p>
          <p>
            Lat: {room?.latitude}, Lon: {room?.longitude}
          </p>
        </div>
      </div>
      <div>
        <div className="flex flex-col gap-5 my-4">
          <label className="flex justify-between">
            Capacity:
            <input
              className="bg-[#A5D7E8]"
              type="number"
              name="capacity"
              value={formData.capacity}
              disabled={!editMode}
              onChange={handleChange}
            />
          </label>
          <label className="flex justify-between">
            Temperature:
            <input
              className="bg-[#A5D7E8]"
              type="number"
              name="temperature"
              value={formData.temperature}
              disabled={!editMode}
              onChange={handleChange}
            />
          </label>
          <label className="flex justify-between">
            Humidity:
            <input
              className="bg-[#A5D7E8]"
              type="number"
              name="humidity"
              disabled={!editMode}
              value={formData.humidity}
              onChange={handleChange}
            />
          </label>
          <label className="flex justify-between">
            Crop:
            <input
              className="bg-[#A5D7E8]"
              type="text"
              name="crop"
              value={formData.crop}
              disabled={!editMode}
              onChange={handleChange}
            />
          </label>
          <label className="flex justify-between">
            Status:
            <input
              className="bg-[#A5D7E8]"
              type="text"
              name="status"
              value={formData.status}
              disabled={!editMode}
              onChange={handleChange}
            />
          </label>
        </div>

        <div className="my-5">
          {editMode ? (
            <Button className="bg-green-500 w-28" onClick={handleConfirm}>
              Confirm
            </Button>
          ) : (
            <Button className="bg-sky-500 w-28" onClick={handleEdit}>
              Edit
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default StorageSlugPage;
