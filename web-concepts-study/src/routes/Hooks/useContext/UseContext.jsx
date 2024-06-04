import React from "react";
import ThemeContextProvider from "./theme-context";
import Message from "./Message";

export const UseContext = () => {
    return (
        <>
        <h1> UseContext </h1>
        <ul>
            <li>
                O useContext serve para que seja possível passar propriedades para uma árvore inteira de componentes sem ter que passar via props. De modo que elas ficaram acessíveis para todos por meio dos Contexts Providers
            </li>
            <br />
            <li>
                {`Se você não tiver um contexto setado você deve utilizar o </Contexto.Consumer>`}
            </li>
        </ul>
        <ThemeContextProvider>
            <Message/>
        </ThemeContextProvider>
        </>
    )
   
}
