"use client"

import { useEffect, useState } from "react"

const PaymentPage = ({ params }: { params: { id: string } }) => {
    const [clientSecret, setClientSecret] = useState("");
    const { id } = params

    useEffect(() => {
        const makeRequest = async () => {
            try {
                const res = await fetch(`http://localhost:3000/api/create-intent/${id}`, {
                    method: "POST"
                })
                const data = await res.json()
                setClientSecret(data.client_secret)
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