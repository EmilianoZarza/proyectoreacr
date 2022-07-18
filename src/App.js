import React from 'react';
import './App.css';
import Navbar from "./Components/NavBar/Navbar";
import ItemListContainer  from './Containers/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './Containers/ItemDetailContainer/ItemDetailContainer';
import { Cart } from './Components/Cart/Cart';
import CartCustomProvider from './Components/Context/CartContext';
import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';

const App = () => {

  return (
    <BrowserRouter>
      <CartCustomProvider>
        <Navbar />
          <Routes>
            <Route path="/" element={<ItemListContainer/>}/>
            <Route path="/categories/:type" element={<ItemListContainer/>} />
            <Route path="/categories/:type/:id" element={<ItemDetailContainer/>}/>
            <Route path="/Cart" element={<Cart />}/>
          </Routes>
      </CartCustomProvider>
    </BrowserRouter>
    
  );
}

export default App