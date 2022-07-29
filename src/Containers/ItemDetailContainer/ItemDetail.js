import React, { useState, useContext } from "react";
import ItemCount from "../../Components/ItemCount/ItemCount";
import { Link } from "react-router-dom";
import { cartContext } from "../../Components/Context/CartContext"

export const ItemDetail = ({ product }) => {
const [finalized, setFinalized] = useState(false);
const { addProduct } = useContext(cartContext);

const onAdd = (contador) => {
    addProduct({...product, qty: contador});
    console.log(`Se agregaran ${contador} productos al carrito`);
    setFinalized(true);
};

return (
    <div className="flex justify-center m-10 p-1 bg-red-50 text-black drop-shadow-md rounded-md overflow-hidden">
        <img className="" src={product.url} alt={product.name}/>
        <div className="flex-colum m-5 items-center">
            <h1 className="m-5 p-2 font-light bg-gray-50 text-black drop-shadow-md rounded-md overflow-hidden">{product.name}</h1>
            <span className="m-5 p-2 font-light bg-gray-50 text-black drop-shadow-md rounded-md overflow-hidden">Precio : ${product.price}</span>
            <p className="m-5 p-2 font-light bg-gray-50 text-black drop-shadow-md rounded-md overflow-hidden">{product.description}</p>
            {!finalized ? (
            <ItemCount onAdd={onAdd} stock={product.stock} initial={1} />
        ) : (
        <> 
            <div className="text-center"> 
                <Link to="/cart">
                    <button className="m-5 p-2 font-light bg-red-200 text-black drop-shadow-md rounded-md overflow-hidden hover:bg-red-300">Finalizar Compra</button>
                </Link>

                <Link to="/">
                    <button className="m-5 p-2 font-light bg-red-200 text-black drop-shadow-md rounded-md overflow-hidden hover:bg-red-300">Seguir Comprando</button>
                </Link>
            </div>  
        </>   
        )}
        </div>
    </div>
    );
};