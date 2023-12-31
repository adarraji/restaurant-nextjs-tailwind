import prisma from "@/utils/connect"
import { NextRequest, NextResponse } from "next/server"

export const PUT = async (request: NextRequest, { params }: { params: { intentId: string } }) => {
    const { intentId } = params
    try {
        await prisma.order.update({
            where: {
                intent_id: intentId,
            },
            data: { status: "Being Prepared!" }
        })
        return new NextResponse(JSON.stringify({ message: "order has been updated" }), { status: 200 })

    } catch (err) {
        console.log(err)
        return new NextResponse(JSON.stringify({ message: "Something went wrong" }), { status: 500 })
    }
}