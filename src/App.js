import React from "react";
import {Navbar} from "./Components/NavBar/NavBar";
import "./App.css";
import {ItemListContainer} from "./Containers/ItemListContainer/ItemListContainer";
import { ItemDetailContainer } from "./Components/ItemDetailContainer/ItemDetailContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Item } from "./Containers/ItemList/Item";

const App = () => {
  const name = "Hipatia";

  return (
    <div>
      <BrowserRouter>
        <Navbar name = {name}>
          <Routes>
            <Route path = "/" element={<ItemListContainer/>}/>
            <Route path = "/categories/:categoria:type" element={ItemListContainer}/>
            <Route path = "/product/:id" element={ItemDetailContainer}/>
          </Routes>
        </Navbar>
        <ItemListContainer greeting={"Bienvenidos a la mejor cerveceria del mundo"} />
      </BrowserRouter>
    </div>

  );
};

export default App;

