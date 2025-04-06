
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const res = await fetch(`https://api.frontendexpert.io/api/fe/wordle-words`)
    const response =  await res.json()
    return NextResponse.json(response, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}