import React from "react";
import { Link } from 'react-router-dom';
import styles from './style.module.css';

export const NavBar = () => {
    return (
        <div className={styles.container}>
            <Link to="/contacts" className={styles.linkCard}>Contatos</Link>
            <Link to="/useState" className={styles.linkCard}>useState</Link>
            <Link to="/useEffect" className={styles.linkCard}>useEffect</Link>
            <Link to="/useRef" className={styles.linkCard}>useRef</Link>
            <Link to="/useReducer" className={styles.linkCard}>useReducer</Link>
            <Link to="/useContext" className={styles.linkCard}>useContext</Link>
            <Link to="/useMemo" className={styles.linkCard}>useMemo</Link>
            <Link to="/useCallback" className={styles.linkCard}>useCallback</Link>
            <Link to="/useLayoutEffect" className={styles.linkCard}>useLayoutEffect</Link>
        </div>
    )
}