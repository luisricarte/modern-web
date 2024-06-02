import React from "react";
import { Link } from 'react-router-dom';

export const NavBar = () => {
    return (
        <nav>
            <Link to="/home">Home</Link>
            <Link to="/contacts">Contatos</Link>
        </nav>
    )
}