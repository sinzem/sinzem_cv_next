import { NextResponse } from "next/server";

export async function POST(request: Request) {
    const body = await request.json();
    const envData = process.env.NEXT_PUBLIC_GREETING;

    return NextResponse.json({message: body, data: envData});
} 

export async function GET(request: Request) {
    return request.json()
}