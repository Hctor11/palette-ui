import { NextApiRequest } from "next";
import { NextResponse } from "next/server";

export function GET(req: NextApiRequest, { params }: any): NextResponse{
    return NextResponse.json({
        message: `getting palette ${params.paletteid}...`
    })
}

export function DELETE(req : NextApiRequest, { params }: any): NextResponse{
    return NextResponse.json({
        message: `deleting palette ${params.paletteid}...`
    })
}

export function PUT(req: NextApiRequest, { params }: any): NextResponse{
    return NextResponse.json({ 
        message: `updating palette ${params.paletteid}...`
    })
}