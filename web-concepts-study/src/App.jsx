import Card from "./components/Card";
import React from "react";
import { Outlet } from "react-router-dom";
import {NavBar} from './components/NavBar'
const App = () => {
  return (
    <>
      <p>NavBar</p>
      <NavBar/>
      <Outlet/>
      <p>Footer</p>
    </>
  )
  
}

export default App;
