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
    <div className="flex justify-center m-10">
        <div className="font-semibold text-sm">
            <img className="" src={product.url} alt={product.name}/>
            <h1 className="bg-red-100">{product.name}</h1>
            <img className="" src={product.url2} alt={product.name}/>
            <span className="bg-red-100">${product.price}</span>
            <p>{product.description}</p>
            {!finalized ? (
            <ItemCount onAdd={onAdd} stock={product.stock} initial={1} />
        ) : (
        <> 
            <div className=""> 
                <Link to="/cart">
                    <button className="bg-red-200 m-2">Finalizar Compra</button>
                </Link>

                <Link to="">
                    <button className="bg-red-200 m-2 ">Seguir Comprando</button>
                </Link>
            </div>  
        </>   
        )}
        </div>
    </div>
    );
};