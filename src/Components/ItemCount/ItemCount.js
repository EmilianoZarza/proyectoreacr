import React, {useState} from "react";

export const ItemCount = ({ stock, initial = 1, onAdd }) => {
  
  const [count, setCount] = useState(initial);

  const handlerAdd = () => {
    if(count < stock) setCount(count + 1);
  };

  const handlerSubtract = () => {
    if(count > 1) setCount(count - 1);
  };

  const handlerAddToCart = () => {
    if(count > 1) onAdd(count);
  };

  return (
    <div className="text-xl font-bold flex gap-2 bg-red-100 items-center">
      <button className="bg-white drop-shadow-md rounded-md overflow-hidden m-1" onClick={handlerAdd}>+</button>
      <span className="text-center text-black text-lg">{count}</span>
      <button className="bg-white drop-shadow-md rounded-md overflow-hidden m-1" onClick={handlerSubtract}>-</button>
      <button className="bg-white drop-shadow-md rounded-md overflow-hidden m-1" onClick={handlerAddToCart}>Agregar al Carrito</button>
    </div>
  );
};  