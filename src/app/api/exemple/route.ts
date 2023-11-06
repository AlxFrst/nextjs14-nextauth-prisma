import { NextApiRequest } from "next";
import { NextResponse } from "next/server";

// exemple api route
export async function GET(request:NextApiRequest) {
  return NextResponse.json({ message: "Hello World" });
}