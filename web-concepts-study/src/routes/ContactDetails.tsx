import React from "react";
import { useParams, useNavigate } from "react-router-dom";
export const ContactDetails = () => {
    const { id } = useParams();
    const navigate = useNavigate()

    const handleContact = () => {
        console.log("Contato Enviado!");
        return navigate("/")
    }
    return(
        <>
            <h1>Exibindo</h1>
            <span> Informações do Contato: {id}</span>
            <button onClick={handleContact}>Enviar Mensagem</button>
        </>
        
    )
}