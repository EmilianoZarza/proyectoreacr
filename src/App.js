import React from "react";
import NavBar from './Components/NavBar/NavBar'
import { ItemListContainer } from "./Conteiners/ItemListConteiner/ItemListConteiner";
import './App.css';

const App = () => {
  return (
    <>
      <NavBar/>
      <ItemListContainer/>
    </>
  )
}

export default App;
