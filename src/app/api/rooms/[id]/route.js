import prisma from "@/lib/connect";
// import { NextApiRequest, NextApiResponse } from "next";
import { NextRequest, NextResponse } from "next/server";

export const PUT = async (req, { params }) => {
  try {
    const roomId = params.id;
    // console.log(roomId);
    // console.log(await req.json());

    const { capacity, temperature, humidity, crop, status } = await req.json();

    console.log(capacity, temperature, humidity, crop, status);

    const room = await prisma.room.update({
      where: { id: roomId },
      data: {
        capacity: parseFloat(capacity),
        temperature: parseFloat(temperature),
        humidity: parseFloat(humidity),
        crop: crop,
        status: status,
      },
    });

    if (!room) {
      return res.status(404).json({ error: "Post not found" });
    }

    return new NextResponse(JSON.stringify(room, { status: 200 }));
  } catch (error) {
    console.log("=-=", error);
    return new NextResponse(
      JSON.stringify({ message: error }, { status: 500 })
    );
  }
};

export const GET = async (req, { params }) => {
  try {
    // const { roomId } = req.query; // Assuming single room ID is passed via query parameter
    // const { searchParams } = new URL(req.url);
    // console.log(params, "=--");
    const roomId = params.id;

    const room = await prisma.room.findUnique({ where: { id: roomId } });

    // console.log(room);

    return new NextResponse(JSON.stringify(room, { status: 200 }));

    /////////////////////

    // if (!roomId || typeof roomId !== "string") {
    //   return res.status(400).json({ message: "Missing or invalid room ID" });
    // }

    // const room = await prisma.room.findUnique({
    //   where: { id: roomId }, // Search by ID
    // });

    // if (!room) {
    //   return res.status(404).json({ message: "Room not found" });
    // }

    // return res.status(200).json(room);

    // const rooms = ["Apple", "ball"];

    // return new JSON.stringify(rooms);
  } catch (error) {
    console.log("=-=");
    return new NextResponse(
      JSON.stringify({ message: "Something went wrong!" }, { status: 500 })
    );
  }
};
