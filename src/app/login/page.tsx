import Image from "next/image"
import Link from "next/link"
import React from 'react'

const LoginPage = () => {
    return (
        <div>
            {/* BOX */}
            <div className="">
                {/* IMAGE CONTAINER */}
                <div className="relative">
                    <Image src="/loginBg.png" alt="" fill className="object-cover" />
                </div>
                {/* FORM CONTAINER */}
                <div className="">
                    <h1 className="">Welcome</h1>
                    <p>Log into your account or create a new one using social buttons</p>
                    <button className="flex gap-4 p-4 ring-1 ring-orange-100 rounded">
                        <Image src="/google.png" alt="" width={20} height={20} className="object-contain" />
                        <span>Sign in with Google</span>
                    </button>
                    <button className="flex gap-4 p-4 ring-1 ring-blue-100 rounded">
                        <Image src="/facebook.png" alt="" width={20} height={20} className="object-contain" />
                        <span>Sign in with Facebook</span>
                    </button>
                    <p className="text-sm">
                        Have a problem?<Link className="underline" href="/"> Contact us</Link>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default LoginPage