import React from 'react'
import Menu from "./Menu"
import Link from "next/link"

const Navbar = () => {
    return (
        <div >
            {/* LOGO */}
            <div>
                <Link href="#">
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