import React from "react";
import { useEffect, useState, useRef } from "react";

export const UseRef = () => {
    const [name, setName] = useState('');
    const [inputName, setInputName] = useState('')
    const renders = useRef(0);

    useEffect(()=>{
        renders.current = renders.current + 1   
    })

    const inputRef = useRef(0);

    const focusInput = () => {
        inputRef.current.focus();
    }

    return (
        <div>
            <h1> useRef </h1>
            <ul>
                <li>
                    O useRef é utilizado para quando é necessário persistir um valor durante toda a vida de um componente, porém
                    sem renderizar novamente o componente
                </li>
                <li>
                    É utilizado para guardar um componente HTML dentro do useRef
                </li>
                <li>
                    O useRef também é utilizado para guardar o estado anterior do componente sem ter que renderizar ele novamente
                </li>
            </ul>
            <hr/>
            <h3> Exemplo 1 </h3>
            <input value={name} onChange={(e)=> setName(e.target.value)} type="text" />
            <p>Hello! My name is {name}</p>
            <p>Renders: {renders.current} </p>
            <hr/>
            <h3> Exemplo 2 </h3>

            <input 
                value={inputName} 
                onChange={(e)=> setInputName(e.target.value)} 
                
                ref={inputRef}/>
            <p>Hello! My name is {inputName}</p>
            <button onClick={focusInput}> Focus Input </button>
        </div>
    )
}