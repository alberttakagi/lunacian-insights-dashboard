import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({
    platform: "twitch",
    status: "stub",
    message: "Future integration point for twitch analytics."
  });
}