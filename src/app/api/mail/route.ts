import { NextResponse } from "next/server";

export async function POST(request: Request) {
    const body = await request.json();

    return NextResponse.json({message: body});
} 

export async function GET(request: Request) {
    return request.json()
}