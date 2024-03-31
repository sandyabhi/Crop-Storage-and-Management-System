"use client";

import Card from "@/components/Card/Card";
import { Button } from "@/components/ui/button";
import { sortRoomsByDistance } from "@/lib/utils";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import axios from "axios";
// import Card from "@/components/Card/Card";

export default function Rooms() {
  const router = useRouter();
  const { data, status } = useSession();

  // const [roomData, setRoomData] = useState([]);
  const [rooms, setRooms] = useState([]);
  const [sortedRooms, setSortedRooms] = useState([]);
  const [filteredRooms, setFilteredRooms] = useState([]);

  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);
  const [error, setError] = useState(null);

  const [selectedOption, setSelectedOption] = useState("");
  const [selectedRoomOption, setSelectedRoomOption] = useState("");

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
      const res = await axios.get(`${process.env.NEXT_PUBLIC_URL}/api/rooms`);
      console.log(process.env.NEXT_PUBLIC_URL);
      const data = await res.data;
      setFilteredRooms(data);
      setRooms(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const handleRoomOptionChange = (event) => {
    setSelectedRoomOption(event.target.value);
    console.log(selectedRoomOption);
  };

  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
    console.log(isChecked);
  };

  const handleApplyFilter = () => {
    if (selectedOption !== "" && isChecked) {
      let data = rooms.filter((room) => room.crop === selectedOption);

      if (selectedRoomOption == "Empty") {
        data = data.filter((room) => room.status == "Empty");
      } else if (selectedRoomOption == "Occupied") {
        data = data.filter((room) => room.status != "Empty");
      }

      setFilteredRooms(sortRoomsByDistance(data, latitude, longitude));
    } else if (selectedOption !== "") {
      // console.log(filteredRooms);
      // console.log(rooms);
      let data = rooms.filter((room) => room.crop === selectedOption);

      if (selectedRoomOption == "Empty") {
        data = data.filter((room) => room.status == "Empty");
      } else if (selectedRoomOption == "Occupied") {
        data = data.filter((room) => room.status != "Empty");
      }

      setFilteredRooms(data);
    } else if (isChecked) {
      let data = rooms;
      if (selectedRoomOption == "Empty") {
        data = data.filter((room) => room.status == "Empty");
      } else if (selectedRoomOption == "Occupied") {
        data = data.filter((room) => room.status != "Empty");
      }

      setFilteredRooms(sortRoomsByDistance(data, latitude, longitude));

      // console.log(filteredRooms);
    } else if (selectedOption !== "") {
      // console.log("=");
      let data = rooms;
      if (selectedRoomOption == "Empty") {
        data = data.filter((room) => room.status == "Empty");
      } else if (selectedRoomOption == "Occupied") {
        data = data.filter((room) => room.status != "Empty");
      }
      setFilteredRooms(data);
    } else {
      setFilteredRooms(rooms);
    }
  };

  const applyFilter = () => {
    if (selectedOption !== "" && selectedRoomOption !== "") {
      let data = rooms
        .filter((room) => room.crop === selectedOption)
        .filter((room) =>
          selectedRoomOption === "Empty"
            ? room.status === "Empty"
            : selectedRoomOption !== "" && room.status !== "Empty"
        );

      console.log(data);
      isChecked
        ? setFilteredRooms(sortRoomsByDistance(data, latitude, longitude))
        : setFilteredRooms(data);
    } else if (selectedOption !== "") {
      let data = rooms.filter((room) => room.crop === selectedOption);

      isChecked
        ? setFilteredRooms(sortRoomsByDistance(data, latitude, longitude))
        : setFilteredRooms(data);
    } else if (selectedRoomOption !== "") {
      let data = rooms.filter((room) =>
        selectedRoomOption === "Empty"
          ? room.status === "Empty"
          : selectedRoomOption !== "" && room.status !== "Empty"
      );
      isChecked
        ? setFilteredRooms(sortRoomsByDistance(data, latitude, longitude))
        : setFilteredRooms(data);
    } else {
      let data = rooms;
      isChecked
        ? setFilteredRooms(sortRoomsByDistance(data, latitude, longitude))
        : setFilteredRooms(data);
    }
  };

  if (status === "loading") {
    return <div>Loading...</div>;
  }

  if (status === "unauthenticated") {
    router.push("/login");
  }

  return (
    <main className="bg-[#DDE6ED] text-black flex min-h-screen flex-col items-center py-24 px-4">
      <div className="p-4 md:px-8 md:py-6 rounded-3xl bg-gradient-to-br from-[#A5D7E8] to-[#576CBC]">
        <div className="flex flex-wrap gap-4 md:gap-8 justify-center items-center font-semibold">
          <div className="w-full md:w-auto">
            <select
              id="option"
              value={selectedOption}
              onChange={handleOptionChange}
              className="w-full md:w-auto p-2 md:py-3 md:px-4 rounded-lg bg-white text-black shadow-md focus:outline-none"
            >
              <option value="">Select Crop</option>
              <option value="Rice">Rice</option>
              <option value="Wheat">Wheat</option>
              <option value="Onion">Onion</option>
              <option value="Potato">Potato</option>
              <option value="Tomato">Tomato</option>
              <option value="Apple">Apple</option>
            </select>
          </div>
          <div className="w-full md:w-auto">
            <select
              value={selectedRoomOption}
              onChange={handleRoomOptionChange}
              className="w-full md:w-auto p-2 md:py-3 md:px-4 rounded-lg bg-white text-black shadow-md focus:outline-none"
            >
              <option value="">Select Room</option>
              <option value="Empty">Empty Room</option>
              <option value="Occupied">Occupied Room</option>
            </select>
          </div>
          <div className="gap-5 flex items-center">
            <label className="cursor-pointer">
              Shortest Route
              <input
                type="checkbox"
                checked={isChecked}
                onChange={handleCheckboxChange}
                className="mx-2"
              />
            </label>
          </div>
          <div>
            <Button
              className="font-semibold bg-white text-black hover:text-white"
              onClick={applyFilter}
            >
              Apply Filter
            </Button>
          </div>
        </div>
      </div>

      {/* Cards */}
      <div className="p-4 md:p-10 flex flex-wrap justify-center gap-4 md:gap-10 mt-4">
        {filteredRooms?.map((room) => (
          <Card
            key={room.id}
            id={room.id}
            title={room.title}
            location={room.location}
            capacity={room.capacity}
            lat={room.latitude}
            lon={room.longitude}
            humidity={room.humidity}
            temperature={room.temperature}
            crop={room.crop}
            status={room.status}
          />
        ))}
      </div>

      {/* Geolocation */}
      <div className="mt-4">
        <h1 className="text-2xl text-center">Your Geolocation</h1>
        {error && <p>{error}</p>}
        {latitude && longitude && (
          <p>
            Latitude: {latitude}, Longitude: {longitude}
          </p>
        )}
      </div>
    </main>
  );
}
