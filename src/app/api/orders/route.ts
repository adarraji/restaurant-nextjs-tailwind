import { NextRequest, NextResponse } from "next/server"
import prisma from "@/utils/connect"
import { getAuthSession } from "@/utils/auth"


// GET ALL ORDERS
export const GET = async (req: NextRequest) => {

    const session = await getAuthSession()

    if (session) {
        try {
            if (session.user.isAdmin) {
                const orders = prisma.order.findMany()
                return new NextResponse(JSON.stringify(orders), { status: 200 })
            }
            const orders = prisma.order.findMany({
                where: {
                    userEmail: session.user.email!
                }
            })
            return new NextResponse(JSON.stringify(orders), { status: 200 })

        } catch (err) {
            console.log(err)
            return new NextResponse(JSON.stringify({ message: "Something went wrong!" }), { status: 500 })
        }
    } else {
        return new NextResponse(JSON.stringify({ message: "You are no authenticated!" }), { status: 401 })
    }

}

export const POST = () => {
    return new NextResponse("Hello", { status: 200 })
}