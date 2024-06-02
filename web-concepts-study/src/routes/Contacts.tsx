import { Link } from "react-router-dom"

export function Contacts() {
    return(
        <div>
            <h1>Contacts duds</h1>
            <Link to="/contacts/1">Primeiro Contato</Link>
            <Link to="/contacts/2">Segundo Contato</Link>
            <Link to="/contacts/13">Décimo Terceiro Contato</Link>
        </div>
       
    )
}