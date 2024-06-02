import { useState } from "react"
import React from "react"

export const UseState = () => {
    const [count, setCount] = useState(0)

    const incrementa = () => {
        setCount(count+1)
    }
    return (
        <div>
            <h1> Use State </h1>
            <p> O useState guarda o estado do </p>
            <span>o valor é: {count}</span>
            <button onClick={incrementa}>Incrementa!</button>
        </div>
    )
}