import React from 'react';
import './App.css';
import Navbar from "./Components/NavBar/Navbar";
import ItemListContainer  from './Containers/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './Components/ItemDetailContainer/ItemDetailContainer';
import { Cart } from './Components/Cart/Cart';
import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';

const App = () => {

  return (
    <BrowserRouter>
    <Navbar />
      <Routes>
        <Route path="/" element={<ItemListContainer/>}/>
        <Route path="/categories/:type" element={<ItemListContainer/>} />
        <Route path="/categories/:categoria:type/:id" element={<ItemDetailContainer/>}/>
        <Route path="/Cart" element={<Cart />}/>
      </Routes>
    </BrowserRouter>
    
  );
}

export default App;