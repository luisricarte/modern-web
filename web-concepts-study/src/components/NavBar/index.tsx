import React from "react";
import { Link } from 'react-router-dom';
import styles from './style.module.css';

export const NavBar = () => {
    return (
        <>
        <Link to="/webHooks" className={styles.webHooks}>Hooks</Link>
        <div className={styles.container}>
            <Link to="/useState" className={styles.linkCardReady}>useState</Link>
            <Link to="/useEffect" className={styles.linkCardReady}>useEffect</Link>
            <Link to="/useRef" className={styles.linkCardReady}>useRef</Link>
            <Link to="/useReducer" className={styles.linkCardReady}>useReducer</Link>
            <Link to="/useContext" className={styles.linkCardReady}>useContext</Link>
            <Link to="/useMemo" className={styles.linkCardReady}>useMemo</Link>
            <Link to="/useCallback" className={styles.linkCardReady}>useCallback</Link>
            <Link to="/useLayoutEffect" className={styles.linkCardReady}>useLayoutEffect</Link>
        </div>
        <Link to="/providerPattern" className={styles.webHooks}>Provider Pattern</Link>
        </>
    )
}