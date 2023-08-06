import { NextResponse } from "next/server";

export function GET(): NextResponse{
    return NextResponse.json({
        message: "Getting all palettes..."
    })
}

export function POST(): NextResponse{
    return NextResponse.json({
        message: "Creating palette..."
    })
}

