import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({
    platform: "x",
    status: "stub",
    message: "Future integration point for X (Twitter) analytics."
  });
}