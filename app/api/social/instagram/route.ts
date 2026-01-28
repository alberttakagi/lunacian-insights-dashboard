import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({
    platform: "instagram",
    status: "stub",
    message: "Future integration point for instagram analytics."
  });
}