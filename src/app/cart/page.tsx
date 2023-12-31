"use client"
import { useCartStore } from "@/utils/store"
import { useSession } from "next-auth/react"
import Image from "next/image"
import { useRouter } from "next/navigation"
import React, { useEffect } from 'react'

const CartPage = () => {
    const { products, totalItems, totalPrice, removeFromCart } = useCartStore()
    const { data: session } = useSession()
    const router = useRouter()

    useEffect(() => {
        useCartStore.persist.rehydrate()
    }, [])

    const handleChekout = async () => {
        if (!session) {
            router.push("/")
        } else {
            try {
                const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/api/orders`, {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({
                        price: totalPrice,
                        products,
                        status: "Not Paid!",
                        userEmail: session.user.email
                    })
                })
                const data = await res.json()
                router.push(`/pay/${data.id}`)

            } catch (err) {
                console.log(err)
            }
        }
    }

    return (
        <div className="h-[calc(100vh-6rem)] md:h-[calc(100vh-9rem)] flex flex-col text-custom-cart lg:flex-row">
            {/* PRODUCT CONTAINER */}
            <div className="h-1/2 p-4 flex flex-col justify-center overflow-scroll lg:h-full lg:w-2/3 2xl:w-1/2 lg:px-20 xl:px-40">
                {/* SINGLE ITEM  CONTAINER */}
                {
                    products.map(item => (
                        <div className="flex items-center justify-between mb-4" key={item.id}>
                            {item.img && <Image src={item.img} alt="" width={100} height={100} />}
                            <div>
                                <h1 className="uppercase text-xl font-bold">{item.title} x{item.quantity}</h1>
                                {item.optionTitle && <span>{item.optionTitle}</span>}
                            </div>
                            <h2 className="font-bold">{item.price}</h2>
                            <span className="cursor" onClick={() => removeFromCart(item)}>X</span>
                        </div>
                    ))
                }

            </div>
            {/* PAYMENT CONTAINER */}
            <div className="h-1/2 p-4 bg-custom-bg-payment flex flex-col gap-4 justify-center lg:h-full lg:w-1/3 2xl:w-1/2 lg:px-20 xl:px-40 2xl:text-2xl 2xl:gap-6">
                <div className="flex justify-between">
                    <span className="">Subtotal ({totalItems} items)</span>
                    <span className="">{totalPrice}</span>
                </div>
                <div className="flex justify-between">
                    <span className="">Service Cost</span>
                    <span className="">$0.00</span>
                </div>
                <div className="flex justify-between">
                    <span className="">Delivery Cost</span>
                    <span className="text-green-500">FREE</span>
                </div>
                <hr className="my-2" />
                <div className="flex justify-between">
                    <span className="">TOTAL(INCL. VAT)</span>
                    <span className="font-bold">{totalPrice}</span>
                </div>
                <button className="bg-custom-bg-button text-custom-button p-3 rounded w-1/2 self-end" onClick={handleChekout}>CHECKOUT</button>
            </div>
        </div>
    )
}

export default CartPage