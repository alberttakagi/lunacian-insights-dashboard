import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({
    platform: “Facebook”,
    status: "stub",
    message: "Future integration point for Facebook analytics."
  });
}