import { useState } from "react"
import React from "react"

export const UseState = () => {
    const [count, setCount] = useState({ count: 0, theme: 'light'})

    const incrementCount = () => {
        setCount(prevState => {
            return {
                ...count,
                count: prevState.count + 1,
                theme: 'dark'
            }

        })
    }
    return (
        <div>
            <h1 className={{fontFamily:'Roboto', fontSize:'35px'}}> UseState </h1>
            <li>
                O UseState serve para armazenar os estados de componentes funcionais
            </li>
            <li>
                const [state, setState]

                <br />
                <ul>O primeiro parâmetro guarda o estado atual e o segundo guarda a função de atualização daquele estado</ul>
            </li>
            <li>
                o useState(:valorPadrão)
            </li>
            <br/>
            <h3>
                Exemplo
            </h3>
            <span>o valor é: {count.count}</span>
            <br/>
            <button onClick={incrementCount}>Incrementa!</button>
        </div>
    )
}