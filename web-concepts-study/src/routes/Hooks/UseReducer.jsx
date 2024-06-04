import React, { act, useReducer, useState } from "react";

const reducer = (state, action) => {
    switch (action.type){
        case 'increment':
            return {
                counter: state.counter + 1
            } 
        case 'decrement':
            return {
                counter: state.counter - 1
            }
        default: 
            return state;
    }
}

const reducerExemplo2 = (state, action) => {
    switch (action.type) {
        case "add-tasks": 
            return {
                ...state,
                tasks: [...state.tasks, { name: action.payload, isCompleted: false }]
            };
        case "toggle-task":
            return {
                ...state,
                tasks: state.tasks.map((item,index) => index === action.payload ? {...item, isCompleted: !item.isCompleted} : item)
            }
        default:
            return state;
    }
} 

export const UseReducer = () => {
    const [state,dispatch] = useReducer(reducer, { counter: 0 })
    const [exemplo2, dispatch1] = useReducer(reducerExemplo2, { tasks: [] });
    const [inputValue, setInputValue] = useState("");

    return (
        <>
        <h1> useReducer </h1>
        <ul>
            <li>
                O useReducer recebe um state e um dispatch
                <br />
                useReducer( funcaoQueSeráExecutada , estadoInicial)
            </li>
            <br />
            <li>
                DISPATCH recebe um objeto contendo um type que diz o que será executado.
            </li>
            <li>
                O useReducer é mais indicado para quando o estado ficar muito complexo e longo
            </li>
            <li>
                Utilizar o useReducer também quando tiver tarefas aninhadas que dependem uma das outras.
            </li>
        </ul>
        <h3>Exemplo 1</h3>
        <p>{state.counter}</p>
        <button onClick={()=> dispatch({ type: 'increment'})}> Increment </button>
        <button onClick={()=> dispatch({ type: 'decrement'})}> Decrement </button>
        <h3>Exemplo 2</h3>
        <div>
            <input value={inputValue}
            onChange={(e) => setInputValue(e.target.value)} />
            <button
                onClick={() => {
                    dispatch1({ type: 'add-tasks', payload: inputValue });
                    setInputValue("")
                }}
            > Adicionar 
            </button>
            <p>Click to complete</p>
            {
                
                exemplo2.tasks.map((item,index)=>(
                    <p onClick={()=> dispatch1({ type: "toggle-task", payload: index})}
                    style={{color: item.isCompleted ? 'green' : '#000' , fontSize: '18px', textDecoration: item.isCompleted && 'line-through'}}>{item.name}</p>
                ))
            }
        </div>
        </>
    )
}