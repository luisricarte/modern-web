import React, { useCallback, useState } from "react";
import List from "./List";

export const UseCallBack = () => {
    const [text, setText] = useState("");
    const [resourceType, setResourceType] = useState("posts");

    const getItems = useCallback(async ()=>{
        console.log('getItems is being called!');
        const response = await fetch(
            `https://jsonplaceholder.typicode.com/${resourceType}`
        );
        const responseJSON = await response.json();

        return responseJSON;
    },[resourceType])
    return (
        <>  
        <h1> UseCallback </h1>
            <ul>
                <li>
                    Utilizado para solucionar problemas também de performaces
                </li>
                <li>
                    No caso onde temos um input que altera estado do componente TEXT ele está chamando a requisição fetch multiplas vezes, mesmo quando não ocorre qualquer alteração.
                </li>
                <li>
                  O UseCallBack adiciona depedências para que a requisição fetch não seja sempre chamada. Fazendo com que a mudança no componente não cause o problema de chamar várias vezes 
                </li>
                <h3>
                    Diferença entre o useMemo e o useCallback
                </h3>
                <li>
                    O useMemo guarda em memória o retorno da função.
                </li>
                <li>
                    O useCallback guarda o retorno da função callBack em memória
                </li>
                <li>
                    Então quando eu tiver passando uma função que tenha um custo de performace, devemos guardar apenas a função em memória.
                </li>
            </ul>
        <h3> Exemplo </h3>
        <div>
            <input value={text} onChange={(e)=> setText(e.target.value)} />

            <button onClick={() => setResourceType("posts")}>Posts</button>
            <button onClick={() => setResourceType("comments")}>Comments</button>
            <button onClick={() => setResourceType("todos")}>Todos</button>

            <List getItems={getItems}></List>
        </div>
        </>
        
    )
}