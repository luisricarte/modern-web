import React, { useState, useEffect } from "react";

export const UseEffect = () => {
    const [resourceType, setResourceType] = useState("posts");
    const [items, setItems] = useState([]);

    useEffect(()=> {
        const fetchResourceTypes = async () => {
            const response = await fetch(`https://jsonplaceholder.typicode.com/${resourceType}`);
            const responseJSON = await response.json();
            setItems(responseJSON);
        }
        fetchResourceTypes();
    },[resourceType])



    const changeResourceType = resourceType => {
        setResourceType(resourceType);
    }

    return (
        <>
            <h1> UseEffect </h1>
            <ul style={{display:'flex', flexDirection:'column', gap:'10px'}}>
                <li>
                    {`"Executar algo quando alguma coisa mudar"`}
                </li>
                <li>
                   {`useEffect(()=>{}, [])`}
                    <br/>
                    {`Como segundo parâmetro ele pode receber uma lista. A lista diz respeito a `}
                    <span style={{fontWeight:'bold'}}>{`quando ele será executado`}</span>
                   
                </li>
                <li>
                    {`Caso seja passado uma lista VAZIA [ ] será executado apenas uma vez.`}
                </li>
                <li>
                    {"Caso não seja passado nada será executado sempre que o componente for renderizado, logo quando qualquer coisa mudar"}
                </li>
                <li>
                    {"Caso seja passada alguma propriedade ele será atualizado sempre que essa propriedade for atualizada"}
                </li>
                <li>
                    {"No caso de uma requisição fetch podemos fazer com que sempre que algum parâmetro da requisição for alterado o useEffect seja executado"}
                </li>

                <h3>Async Await</h3>
                <li>
                    {"o useEffect receber o async/await, porém para utilizar esse recurso é possível definir dentro do useEffect uma função que seja executada assincronamente."}
                </li>
                <h3> Lice Cycle Methods</h3>
                <li>
                    {"ComponentWillUnount | ComponentDidMount"}
                </li>
                <li>
                    {`
                        useEffect(()=>{
                            //ComponentDidMount

                            return (()=>{
                                //ComponentWillUnmount
                            })
                        },[])
                    `}
                </li>
            </ul>
            <h3> (1) Exemplo Fetch </h3>
            <div style={{display:'flex',flexDirection:'column', justifyContent:'center',alignItems:'center'}}>
                <span style={{fontSize:'24px', color:'blue', marginBottom:'1rem'}}>{resourceType}</span>
                
                <button style={{width:'40%'}} onClick={() => changeResourceType("posts")}>Posts</button>
                <button style={{width:'40%'}} onClick={() => changeResourceType("comments")}>Comments</button>
                <button style={{width:'40%'}} onClick={() => changeResourceType("todos")}>Todos</button>
            </div>
            <div>
                {
                    items.slice(0,10).map(item => (
                        (item.title) ? 
                        (<p style={{display:'flex', alignItems:'center', justifyContent:'center'}}>{`${item.id} - ${item.title}`}</p>) 
                        : 
                        (<p style={{display:'flex', alignItems:'flex-start', justifyContent:'center'}}>{`${item.id} - ${item.name}`}</p>)
                ))}
            </div> 
        </>
    )
}