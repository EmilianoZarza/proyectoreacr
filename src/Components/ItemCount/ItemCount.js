import React, { useState } from "react";

const ItemCount = ({ stock, initial = 1, onAdd }) => {

    const [contador, setContador] = useState(initial)

    const suma = () => {
        contador < stock && setContador(contador + 1)
        contador >= stock && alert('No hay stock para este producto o servicio')
    }

    const resta = () => {
        setContador(Math.max(contador - 1, 0))
    }

    const agregado = () => {
        if(contador > 0) onAdd(contador);
    }

return (
    <>
        <div className="flex justify-center m-5 p-2 font-light bg-red-200 text-black drop-shadow-md rounded-md overflow-hidden ">
            <button className="font-mono text-lg m-2 hover:bg-gray-50 text-black drop-shadow-md rounded-md overflow-hidden p-3" onClick={resta}>-</button>
            <span className="font-mono text-xl m-2 p-3">{contador}</span>
            <button className="font-mono text-lg m-2 hover:bg-gray-50 text-black drop-shadow-md rounded-md overflow-hidden p-3" onClick={suma}>+</button>
            <button className="font-mono text-2xl hover:bg-gray-50 text-black drop-shadow-md rounded-md overflow-hidden p-3" onClick={agregado}>Agregar al Carrito</button>
        </div>
    </>
)}

export default ItemCount