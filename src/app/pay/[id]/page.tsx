"use client"

import { useEffect } from "react"

const PaymentPage = ({ params }: { params: { id: string } }) => {
    const { id } = params

    useEffect(() => {
        const makeRequest = async () => {
            try {
                const res = await fetch(`http://localhost:3000/api/create-intent/${id}`, {
                    method: "POST"
                })
                const data = res.json()

            } catch (err) {
                console.log(err)
            }
        }

        makeRequest()

    }, [id])

    return (
        <div>PaymentPage</div>
    )
}

export default PaymentPage