import prisma from "@/app/lib/db";
import { NextResponse } from "next/server";

export async function GET() {
  const res = prisma.travelItem.findMany();

  return NextResponse.json({ travelItems: await res }, { status: 200 });
}
