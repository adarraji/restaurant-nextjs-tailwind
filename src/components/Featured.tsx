import { ProductType } from "@/types/types"
import Image from "next/image"
import React from 'react'
export const dynamic = "‘orce-dynamic";


const getData = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/api/products`, { cache: "no-store" })
  if (!res.ok) {
    throw new Error("Failed!")
  }
  return res.json()
}

const Featured = async () => {

  const featuredProducts: ProductType[] = await getData()

  return (
    <div className="w-screen overflow-x-scroll text-custom-featured">

      {/* WRAPPER */}
      <div className="w-max flex">

        {/* SINGLE ITEM */}

        {
          featuredProducts.map(item => (
            <div key={item.id} className="w-screen h-[60vh] flex flex-col items-center justify-around p-4 hover:bg-custom-featured-hover transition-all duration-300 md:w-[50vw] xl:w-[33vw] xl:h-[90vh]">

              {/* IMAGE  CONTAINER */}
              {
                item.img &&
                <div className="relative flex-1 w-full hover:rotate-[60deg] transition-all duration-500">
                  <Image src={item.img} alt="" fill className="object-contain" />
                </div>
              }

              {/* TEXT  CONTAINER */}
              <div className="flex-1 flex flex-col items-center justify-center gap-4 text-center">
                <h1 className="text-xl font-bold uppercase xl:text-2xl 2xl:text-3xl">{item.title}</h1>
                <p className="p-4 2xl:p-8">{item.desc}</p>
                <span className="text-xl font-bold">{item.price}</span>
                <button className="bg-custom-bg-button text-custom-button p-2 rounded-md">Add to Cart</button>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default Featured