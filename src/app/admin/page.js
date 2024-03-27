"use client";

import React from "react";
import { signOut, useSession } from "next-auth/react";
import { Link } from "next/link";
import { useState } from "react";
import { Button } from "@/components/ui/button";

const Admin = () => {
  // State variables to store form data
  const [formData, setFormData] = useState({
    title: "",
    location: "",
    latitude: "",
    longitude: "",
    capacity: "",
    temperature: "",
    humidity: "",
    crop: "",
    status: "",
    image: "",
  });

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Logic to handle form submission (e.g., send data to backend)
    console.log("Form submitted:", formData);
  };

  // Function to handle form field changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <div className="bg-[#DDE6ED] py-28 flex justify-center items-center">
      <div className="m-4 w-2/3">
        <h1 className="text-2xl font-bold mb-4">Add Room</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Title */}
          <div>
            <label htmlFor="title" className="block font-semibold">
              Title:
            </label>
            <input
              type="text"
              id="title"
              name="title"
              value={formData.title}
              onChange={handleChange}
              className="border border-gray-300 rounded-md p-2 w-full"
            />
          </div>
          {/* Location */}
          <div>
            <label htmlFor="location" className="block font-semibold">
              Location:
            </label>
            <input
              type="text"
              id="location"
              name="location"
              value={formData.location}
              onChange={handleChange}
              className="border border-gray-300 rounded-md p-2 w-full"
            />
          </div>
          {/* Latitude */}
          <div>
            <label htmlFor="latitude" className="block font-semibold">
              Latitude:
            </label>
            <input
              type="text"
              id="latitude"
              name="latitude"
              value={formData.latitude}
              onChange={handleChange}
              className="border border-gray-300 rounded-md p-2 w-full"
            />
          </div>
          {/* Longitude */}
          <div>
            <label htmlFor="longitude" className="block font-semibold">
              Longitude:
            </label>
            <input
              type="text"
              id="longitude"
              name="longitude"
              value={formData.longitude}
              onChange={handleChange}
              className="border border-gray-300 rounded-md p-2 w-full"
            />
          </div>
          {/* Capacity */}
          <div>
            <label htmlFor="capacity" className="block font-semibold">
              Capacity:
            </label>
            <input
              type="number"
              id="capacity"
              name="capacity"
              value={formData.capacity}
              onChange={handleChange}
              className="border border-gray-300 rounded-md p-2 w-full"
            />
          </div>
          {/* Temperature */}
          <div>
            <label htmlFor="temperature" className="block font-semibold">
              Temperature:
            </label>
            <input
              type="text"
              id="temperature"
              name="temperature"
              value={formData.temperature}
              onChange={handleChange}
              className="border border-gray-300 rounded-md p-2 w-full"
            />
          </div>
          {/* Humidity */}
          <div>
            <label htmlFor="humidity" className="block font-semibold">
              Humidity:
            </label>
            <input
              type="text"
              id="humidity"
              name="humidity"
              value={formData.humidity}
              onChange={handleChange}
              className="border border-gray-300 rounded-md p-2 w-full"
            />
          </div>
          {/* Crop */}
          <div>
            <label htmlFor="crop" className="block font-semibold">
              Crop:
            </label>
            <input
              type="text"
              id="crop"
              name="crop"
              value={formData.crop}
              onChange={handleChange}
              className="border border-gray-300 rounded-md p-2 w-full"
            />
          </div>
          {/* Status */}
          <div>
            <label htmlFor="status" className="block font-semibold">
              Status:
            </label>
            <input
              type="text"
              id="status"
              name="status"
              value={formData.status}
              onChange={handleChange}
              className="border border-gray-300 rounded-md p-2 w-full"
            />
          </div>
          {/* Image */}
          <div>
            <label htmlFor="image" className="block font-semibold">
              Image:
            </label>
            <input
              type="file"
              id="image"
              name="image"
              accept="image/*"
              onChange={handleChange}
              className="border border-gray-300 rounded-md p-2 w-full"
            />
          </div>
          {/* Submit Button */}
          <Button type="submit" className="w-28">
            Submit
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Admin;
