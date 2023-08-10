import React from 'react'
import Menu from "./Menu"
import Link from "next/link"

const Navbar = () => {
    return (
        <div className="h-12 text-red-500 p-4 items-center flex justify-between border-b-2 border-b-red-500" >
            {/* LOGO */}
            <div>
                <Link href="/">
                    Massimo
                </Link>
            </div>
            {/* MOBILE MENU */}
            <div>
                <Menu />
            </div>
        </div>
    )
}

export default Navbar