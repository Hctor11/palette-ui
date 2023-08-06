import { NextResponse } from "next/server";

function GET(){
    return NextResponse.json({
        message: "Getting all palettes..."
    })
}