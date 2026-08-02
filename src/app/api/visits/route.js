import { NextResponse } from "next/server";
import { addVisit, getStats } from "../../../lib/db";

export async function GET() {
  return NextResponse.json(getStats());
}

export async function POST() {
  addVisit();
  return NextResponse.json(getStats());
}
