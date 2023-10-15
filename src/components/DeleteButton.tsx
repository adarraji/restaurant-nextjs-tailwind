"use client"

import Image from "next/image"

const DeleteButton = () => {
    return (
        <button className="bg-red-400 p-2 rounded-full absolute top-4 right-4">
            <Image src="/delete.png" alt="" width={20} height={20} />
        </button>
    )
}

export default DeleteButton