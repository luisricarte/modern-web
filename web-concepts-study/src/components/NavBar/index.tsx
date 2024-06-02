import React from "react";
import { Link } from 'react-router-dom';
import styles from './style.module.css';

export const NavBar = () => {
    return (
        <div className={styles.container}>
            <Link to="/useState" className={styles.linkCard}>useState</Link>
            <Link to="/contacts" className={styles.linkCard}>Contatos</Link>
        </div>
    )
}