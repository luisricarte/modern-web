import React from "react";

export const UseLayoutEffect = () => {
    return (
        <>
        
        <h1> UseLayoutEffect </h1>
            <ul>
                <li>
                    O UseLayoutEffect serve para alterar o componente antes de montar o DOM. Logo, a alteração não será demonstrada em tela em nenhum momento, pois irá acontecer antes da página ser criada.
                </li>
            </ul>
        </>
    )
}