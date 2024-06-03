import React, { useState, useEffect } from "react";

export const UseEffect = () => {
    const [resourceType, setResourceType] = useState("posts");

    useEffect(()=>{
        console.log('render')
    },[])

    const changeResourceType = resourceType => {
        setResourceType(resourceType);
    }

    return (
        <>
            <h1> UseEffect </h1>
            <ul style={{display:'flex', flexDirection:'column', gap:'10px'}}>
                <li>
                    "Executar algo quando alguma coisa mudar"
                </li>
                <li>
                    useEffect(()=>
                    callbackFunction
                    , [])
                    <br/>
                    Como segundo parâmetro ele pode receber uma lista. A lista diz respeito a 
                    <span style={{fontWeight:'bold'}}> quando ele será executado</span> 
                </li>
                <li>
                    Caso seja passado uma lista VAZIA "[]" será executado apenas uma vez.
                </li>
                <li>
                    Caso não seja passado nada será executado sempre que o componente for 
                    renderizado, logo quando qualquer coisa mudar
                </li>
                <li>
                    Por fim, caso seja passada alguma propriedade ele será atualizado sempre que essa
                    propriedade for atualizada
                </li>
                </ul>
            <h3> Exemplo </h3>
            <div style={{display:'flex',flexDirection:'column', justifyContent:'center',alignItems:'center'}}>
                <span style={{fontSize:'24px', color:'blue', marginBottom:'1rem'}}>{resourceType}</span>
                
                <button style={{width:'40%'}} onClick={() => changeResourceType("posts")}>Posts</button>
                <button style={{width:'40%'}} onClick={() => changeResourceType("comments")}>Comments</button>
                <button style={{width:'40%'}} onClick={() => changeResourceType("todos")}>Todos</button>

            </div>
        </>
    )
}