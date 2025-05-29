import prisma from "@/app/lib/db";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const id = searchParams.get("id");

  if (!id) {
    return NextResponse.json(
      { error: "Missing id parameter" },
      { status: 400 }
    );
  }

  const travelItems = await prisma.travelItem.findUnique({
    where: {
      id: Number(id),
    },
  });
  return NextResponse.json({ travelItems });
}
