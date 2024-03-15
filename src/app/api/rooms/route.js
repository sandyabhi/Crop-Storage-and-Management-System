import prisma from "@/lib/connect";
import { NextResponse } from "next/server";

export const GET = async () => {
  try {
    const rooms = await prisma.room.findMany();
    // const rooms = ["Apple", "ball"];

    // return new JSON.stringify(rooms);
    return new NextResponse(JSON.stringify(rooms, { status: 200 }));
  } catch (error) {
    return new NextResponse(
      JSON.stringify({ message: "Something went wrong!" }, { status: 500 })
    );
  }
};
