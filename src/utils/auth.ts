import { NextAuthOptions, getServerSession } from "next-auth"
import GoogleProvider from "next-auth/providers/google"
import prisma from "./connect"
import { PrismaAdapter } from "@next-auth/prisma-adapter"

export const authOptions: NextAuthOptions = {

    adapter: PrismaAdapter(prisma),
    session: {
        strategy: "jwt"
    },
    providers: [
        GoogleProvider({
            // clientId: process.env.GOOGLE_ID as string,
            // clientSecret: process.env.GOOGLE_SECRET as string,
            clientId: process.env.GOOGLE_ID!,
            clientSecret: process.env.GOOGLE_SECRET!,
        }),
    ],
    callbacks: {
        async session({ token, session }) {
            if (token) {
                session.user.isAdmin = token.isAdmin
            }

            return session
        },

        async jwt({ token }) {

            const userInDb = await prisma.user.findUnique({
                where: {
                    email: token.email!
                }
            })

            token.isAdmin = userInDb?.isAdmin!

            return token
        },

    }
}

export const getAuthSession = () => getServerSession(authOptions)