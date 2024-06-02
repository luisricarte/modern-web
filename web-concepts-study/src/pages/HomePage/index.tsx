import { Outlet } from "react-router-dom"
import { NavBar } from "../../components/NavBar"
import styles from './styles.module.css';

export const HomePage = () => {
    return (
        <>
        <p className={styles.navbar}>NavBar</p>
        <NavBar/>
        <hr/>
        <Outlet/>
    
      </>
    )
}