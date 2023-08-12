import React from 'react'
import Menu from "./Menu"
import Link from "next/link"

const Navbar = () => {
    return (
        <div className="h-12 text-red-500 p-4 items-center flex justify-between border-b-2 border-b-red-500 uppercase" >
            <div className="hidden md:flex gap-4">
                <Link href="/">Home page</Link>
                <Link href="/menu">Home page</Link>
                <Link href="/">Contact</Link>
            </div>
            {/* LOGO */}
            <div className="text-xl">
                <Link href="/">
                    Massimo
                </Link>
            </div>
            {/* MOBILE MENU */}
            <div className="md:hidden">
                <Menu />
            </div>
        </div>
    )
}

export default Navbar