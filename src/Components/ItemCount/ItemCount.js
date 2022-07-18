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
        <div className="flex justify-center bg-red-200 m-7 p-3">
            <button className="font-semibold text-lg m-2 hover:bg-white" onClick={resta}>-</button>
            <span className="font-bold text-xl m-2">{contador}</span>
            <button className="font-semibold text-lg m-2 hover:bg-white" onClick={suma}>+</button>
            <button className="font-bold text-2xl hover:bg-white" onClick={agregado}>Agregar al Carrito</button>
        </div>
    </>
)}

export default ItemCount