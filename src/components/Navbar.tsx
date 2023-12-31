import React from 'react'
import Menu from "./Menu"
import Link from "next/link"
import CartIcon from "./CartIcon"
import Image from "next/image"
import UserLinks from "./UserLinks"

const Navbar = () => {
    return (
        <div className="h-12 text-custom-menu p-4 items-center flex justify-between border-b-2 border-b-custom-border uppercase md:h-24 lg:px-20 xl:px-40" >
            {/* LEFT LINKS */}
            <div className="hidden md:flex gap-4 flex-1">
                <Link href="/">Homepage</Link>
                <Link href="/menu">Menu</Link>
                <Link href="/">Contact</Link>
            </div>
            {/* LOGO */}
            <div className="text-xl md:font-bold flex-1 md:text-center">
                <Link href="/">
                    Bistro Pro
                </Link>
            </div>
            {/* MOBILE MENU */}
            <div className="md:hidden">
                <Menu />
            </div>
            {/* RIGHT LINKS */}
            <div className="hidden md:flex gap-4 items-center flex-1 justify-end">
                {/* PHONE */}
                <div className="md:absolute top-3 right-2 lg:static flex gap-2 items-center cursor-pointer bg-orange-300 px-1 rounded-md ">
                    <Image src="/phone.png" alt="" width={20} height={20} />
                    <span>123 456 78</span>
                </div>
                <UserLinks />
                <CartIcon />
            </div>
        </div>
    )
}

export default Navbar