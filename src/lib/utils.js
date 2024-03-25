import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

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

export function sortRoomsByDistance(rooms, currentLat, currentLon) {
  const sortedRoom = rooms;
  return sortedRoom.sort((room1, room2) => {
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
