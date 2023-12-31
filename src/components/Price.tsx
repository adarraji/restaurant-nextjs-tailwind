"use client"

import { ProductType } from "@/types/types"
import { useCartStore } from "@/utils/store"
import React, { useEffect, useState } from "react"
import { toast } from "react-toastify"

type PriceProps = {
    product: ProductType
}

const Price = ({ product }: PriceProps) => {

    const [total, setTotal] = useState(product.price)
    const [quantity, setQuantity] = useState(1)
    const [selected, setSelected] = useState(0)

    const { addToCart } = useCartStore()

    useEffect(() => {
        useCartStore.persist.rehydrate()
    }, [])

    useEffect(() => {
        setTotal(quantity * (product.options?.length ? Number(product.price) + Number(product.options[selected].additionalPrice) : product.price))


    }, [quantity, selected, product])

    const handleCart = () => {
        addToCart({
            id: product.id,
            title: product.title,
            img: product.img,
            price: total,
            ...(product.options?.length && { optionTitle: product.options[selected].title }),
            quantity: quantity,
        })
        toast.success("Product added to the cart!")
    }

    return (
        <div className="flex flex-col gap-4">
            <h2 className="text-2xl font-bold">{total}</h2>
            {/* OPTIONS CONTAINER */}
            <div className="flex gap-4">
                {product.options?.length && product.options?.map((option, index) => (
                    <button
                        key={option.title}
                        className="min-w-[6rem] p-2 ring-1 ring-custom-border-button rounded-md"
                        style={{
                            background: selected === index ? "rgb(248 113 113)" : "white",
                            color: selected === index ? "white" : "rgb(248 113 113)",
                        }}
                        onClick={() => setSelected(index)}
                    >
                        {option.title}
                    </button>
                ))}
            </div>
            {/* QUANTITIY AND ADD BUTTON CONTAINER */}
            <div className="flex justify-between items-center">
                {/* QUANTITY */}
                <div className="flex justify-between w-full p-3 ring-1 ring-custom-border-button">
                    <span>Quantity</span>
                    <div className="flex gap-4 items-center">
                        <button onClick={() => setQuantity(prev => (prev > 1 ? prev - 1 : 1))}>{"<"}</button>
                        <span>{quantity}</span>
                        <button onClick={() => setQuantity(prev => (prev < 9 ? prev + 1 : 9))}>{">"}</button>
                    </div>
                </div>
                {/* CART BUTTON */}
                <button className="uppercase w-56 bg-custom-bg-button text-custom-button p-3 ring-1 ring-custom-border-button" onClick={handleCart}>Add to Cart</button>
            </div>
        </div>
    )
}

export default Price