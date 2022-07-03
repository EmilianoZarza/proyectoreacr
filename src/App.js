import React from "react";
import {Navbar} from "./Components/NavBar/Navbar";
import "./App.css";
import {ItemListContainer} from "./Conteiners/ItemListConteiner/ItemListConteiner";

const App = () => {
  const name = "Hipatia";

  return (
    <div style={styles}>
      <Navbar name = {name} />
      <ItemListContainer greeting={"Bienvenidos a la mejor cerveceria del mundo"} />
    </div>
  );
};

export default App;

const styles = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center"
};