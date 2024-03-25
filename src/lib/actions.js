"use server";

export const getData = async () => {
  try {
    const res = await fetch("http://localhost:3000/api/rooms");
    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }
    const data = await res.json();
    // setRooms(data);
    console.log(data);
    return data;
  } catch (error) {
    console.error("Error fetching data:");
  }
};
