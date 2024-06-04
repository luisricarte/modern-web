import React from "react";
import ThemeContextProvider from "./theme-context";
import Message from "./Message";
import  Greeting  from "./Greeting";

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
                {`Se você não tiver um contexto setado você deve utilizar o </Contexto.Consumer> => Usando explicitamente`}
                <br />
                {`<Contexto.Consumer> (value) => () </ Contexto.Consumer> ---> dentro desse value as propriedade são compartilhados`}
            </li>
            <li>
                {`Quando se está dentro do contexto as propriedades são compartilhadas por meio do destructuring `}
                <br />
                {`const {itemDoContexto} = useContext(Contexto)`}
            </li>
            <h3>Como definir um Contexto</h3>
            <li>
                <span style={{padding: '2px', backgroundColor: '#ccc', borderRadius:'8px'}}>{`export const ThemeContext = createContext({})`}</span>
                 --- Passando as propriedades daquele contexto. Ou seja, as propriedades que serão compartilhadas.
            </li>
            <br />
            <li>
            <span style={{padding: '2px', backgroundColor: '#ccc', borderRadius:'8px'}}>{`export const ThemeContextProvider = ({children})`}</span>
            É necessário também definir o ContextProvider onde contém a lógica explorada no contexto. Como se fosse um service.
            <li>
                Já para utilizar o contexto é necessário:
                <br/>
                <span style={{ padding:'2px',backgroundColor: '#ccc', borderRadius:'8px'}}>
                    {
                    `<ThemeContext.Provider value={{ theme, toggleTheme}}>
                        {children}
                    </ThemeContext.Provider>`}
                </span>
            </li>
        </li>


        </ul>
        <ThemeContextProvider>
            <Message />
            <Greeting />
        </ThemeContextProvider>
        </>
    )
   
}
