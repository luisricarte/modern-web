import { Outlet } from "react-router-dom"
import { NavBar } from "../../components/NavBar"
import styles from './styles.module.css';

export const HomePage = () => {
    return (
        <>
        <hr/>
        <Outlet/>
    
      </>
    )
}