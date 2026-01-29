import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({
    platform: "facebook",
    status: "stub",
    message: "Integration point for Facebook analytics."
  });
}
