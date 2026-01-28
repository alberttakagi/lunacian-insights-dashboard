import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({
    platform: "tiktok",
    status: "stub",
    message: "Future integration point for tiktok analytics."
  });
}