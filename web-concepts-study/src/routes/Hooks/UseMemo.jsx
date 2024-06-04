import React from "react";
import {useState, useMemo} from 'react';

export const UseMemo = () => {
    const [text, setText] = useState('');
    const [number, setNumber] = useState(1);

    const slowFunction = (number) => {
        console.log(' Example: Slow Funcition is running.');
        return number*2;
    }
    const doubleNumber = useMemo(()=> {
        return slowFunction(number);
    },[number]);
    
    return (
        <>
            <h1> UseMemo </h1>
            <ul>
                <li>
                    O useMemo é utilizado para casos em que está acontecendo problemas de performace. 
                </li>
                <li>
                    Ele tem a mesma estrutura do useEffect e os argumentos passados como parâmetro na lista
                    servem para dizer quando ele precisa ser chamado. Ao invés de toda vez que o componente for
                    renderizado novamente.
                </li>
                <li>
                    Ele guarda tudo que você precisar em Memória, então é necessário também remediar o seu uso.
                </li>
            </ul>   
            <h3> Exemplo </h3>
            
            <input value={text} onChange={(e)=>setText(e.target.value)} />
            <p>text: {text} </p>
            <br />
            <button onClick={() => setNumber(2)}>Increment</button>
            <p>{number}</p>
            
        </>
    )
}