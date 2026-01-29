import { NextResponse } from 'next/server';

export async function GET() {
  return NextResponse.json({
    message: "Stats endpoint placeholder",
    status: "active"
  });
}
