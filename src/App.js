import React from "react";
import {Navbar} from "./Components/NavBar/Navbar";
import "./App.css";
import {ItemListContainer} from "./Containers/ItemListContainer/ItemListContainer";
import { ItemDetailContainer } from "./Components/ItemDetailContainer/ItemDetailContainer";
import { Cart } from "./Components/Cart/Cart"
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {

  return (
    
    <div>
      <BrowserRouter>
        <Navbar>
          <Routes>
            <Route path = "/" element={<ItemListContainer/>}/>
            <Route path = "/categories/:categoria:type" element={ItemListContainer}/>
            <Route path = "/product/:id" element={ItemDetailContainer}/>
            <Route path="/Cart" element={<Cart />}/>
          </Routes>
        </Navbar>
        <ItemListContainer greeting={"Bienvenidos a la mejor cerveceria del mundo"} />
      </BrowserRouter>
    </div>

  );
};

export default App;

