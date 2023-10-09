import prisma from "@/utils/connect"
import { NextRequest, NextResponse } from "next/server"

type ParamsProps = {
    params: { id: string }
}

// GET SINGLE PRODUCT
export const GET = async (req: NextRequest, { params }: ParamsProps) => {
    const { id } = params

    try {
        const product = await prisma.product.findUnique({
            where: {
                id: id,
            },
        })
        return new NextResponse(JSON.stringify(product), { status: 200 })

    } catch (err) {
        console.log(err)
        return new NextResponse(JSON.stringify({ message: "Something went wrong" }), { status: 500 })
    }

}