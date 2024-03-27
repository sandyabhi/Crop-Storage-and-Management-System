// "use client";

import { checkSuitableCrop } from "@/lib/card-actions";
import Link from "next/link";
import { useEffect, useState } from "react";

const Card = ({
  id,
  title,
  capacity,
  location,
  lat,
  lon,
  temperature,
  humidity,
  crop,
  status,
}) => {
  // const [crops, setCrops] = useState("-");

  // useEffect(() => {
  //   setCrops(checkSuitableCrop(temperature, humidity).join(", "));
  // }, []);

  const crops = checkSuitableCrop(temperature, humidity).join(", ");

  return (
    <>
      <Link href={`/rooms/${id}`}>
        <div className="bg-[#0B2447] bg-gradient-to-br from-[#0B2447] to-teal-900 p-2 rounded-lg text-white shadow-md">
          <div className="text-base">
            <div className="relative">
              <img
                className="w-80 h-48"
                alt="img"
                src="https://images.unsplash.com/photo-1708955743956-da1bb7f6fe6a?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              />
              <div className="bg-opacity-50 bg-black absolute bottom-0 left-0 pr-2">
                <p>{title}</p>
                <p>location: {location}</p>
                <p>
                  lat:{lat}, lon:{lon}
                </p>
              </div>
            </div>

            <div>
              <p>Capacity: {capacity} Kg</p>
              <p>Temperature: {temperature} C</p>
              <p>Humidity: {humidity} %</p>
              {crop != "" ? (
                <p>Storage for {crop}</p>
              ) : (
                <p>Suitable for {crops}</p>
              )}
              <p>Status: {status}</p>
            </div>
          </div>
        </div>
      </Link>
    </>
  );
};

export default Card;

// <Link href={`/rooms/${id}`}>
// <div className="bg-[#0B2447] bg-gradient-to-br from-[#0B2447] to-[#0F1035] p-2 rounded-lg text-white shadow-md">
//   <div className="text-base relative">
//     <img
//       className="w-80 h-48"
//       alt="img"
//       src="https://images.unsplash.com/photo-1708955743956-da1bb7f6fe6a?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
//     />

//     <div className="bg-opacity- bg-black absolute top-28 left-0">
//       <p>{title}</p>
//       <p>location: {location}</p>
//       <p>
//         lat:{lat}, lon:{lon}
//       </p>
//     </div>

//     <div>
//       <p>Capacity: {capacity} Kg</p>
//       <p>Temperature: {temperature} C</p>
//       <p>Humidity: {humidity} %</p>
//       {crop != "" ? (
//         <p>Storage for {crop}</p>
//       ) : (
//         <p>Suitable for {crops}</p>
//       )}
//       <p>Status: {status}</p>
//     </div>

//     {/* <div>
//   <p className="px-4 py-2 mt-4 bg-green-700 rounded-md">Edit</p>
// </div> */}
//   </div>
// </div>
// </Link>
