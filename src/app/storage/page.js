"use client";

import Card from "@/components/Card/Card";
import { sortRoomsByDistance } from "@/lib/utils";
import { useEffect, useState } from "react";

const Storage = () => {
  const [roomData, setRoomData] = useState([]);
  const [sortedRooms, setSortedRooms] = useState([]);

  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Check for Geolocation support
    if (!navigator.geolocation) {
      setError("Geolocation is not supported by your browser");
      return;
    }

    // Request user's location
    navigator.geolocation.getCurrentPosition(
      (position) => {
        setLatitude(position.coords.latitude);
        setLongitude(position.coords.longitude);
      },
      (error) => {
        setError(`Geolocation error: ${error.message}`);
      }
    );

    getData();
  }, []);

  const getData = async () => {
    try {
      const res = await fetch("http://localhost:3000/api/rooms");
      if (!res.ok) {
        throw new Error("Failed to fetch data");
      }
      const data = await res.json();
      console.log(data[0].slug);
      setRoomData(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  /*
  function deg2rad(deg) {
    return deg * (Math.PI / 180);
  }

  function calculateDistance(lat1, lon1, lat2, lon2) {
    const R = 6371; // Radius of the Earth in kilometers
    const dLat = deg2rad(lat2 - lat1);
    const dLon = deg2rad(lon2 - lon1);

    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(deg2rad(lat1)) *
        Math.cos(deg2rad(lat2)) *
        Math.sin(dLon / 2) *
        Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    const distance = R * c; // Distance in kilometers

    return distance;
  }

  function sortRoomsByDistance(rooms, currentLat, currentLon) {
    return rooms.sort((room1, room2) => {
      const distance1 = calculateDistance(
        currentLat,
        currentLon,
        room1.latitude,
        room1.longitude
      );
      const distance2 = calculateDistance(
        currentLat,
        currentLon,
        room2.latitude,
        room2.longitude
      );
      return distance1 - distance2; // Sort by distance ascending
    });
  }
*/

  const handleSort = () => {
    // console.log(latitude, longitude);
    setSortedRooms(sortRoomsByDistance(roomData, latitude, longitude));

    console.log(sortedRooms);
  };

  return (
    <main className="bg-slate-600 flex min-h-screen flex-col items-center p-24">
      {/* //// */}
      <div>
        <button
          className="px-4 py-2 bg-slate-400 text-black font-bold rounded-md"
          onClick={handleSort}
        >
          Sort
        </button>
      </div>
      {/* //// */}
      <div>
        <div className="p-10 flex flex-wrap gap-10">
          {sortedRooms?.map((room) => (
            <Card
              key={room.id}
              title={room.title}
              location={room.location}
              capacity={room.capacity}
              lat={room.latitude}
              lon={room.longitude}
            />
          ))}
        </div>
      </div>
      {/* //// */}
      <div>
        <h1>Geolocation Example</h1>
        {error && <p>{error}</p>}
        {latitude && longitude && (
          <p>
            Latitude: {latitude}, Longitude: {longitude}
          </p>
        )}
      </div>
      {/* ///// */}
    </main>
  );
};

export default Storage;
