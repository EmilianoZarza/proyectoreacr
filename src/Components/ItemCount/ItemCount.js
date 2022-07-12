
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
        <div className="text-center font-semibold">
            <button className="bg-red-100 items-center font-medium m-5 p-3" onClick={resta}>-</button>
            <span className="font-bold text-center items-center">{contador}</span>
            <button className="bg-red-100 items-center font-medium m-5 p-3" onClick={suma}>+</button>
            <button className="bg-red-100 items-center font-medium m-5 p-3" onClick={agregado}>Agregar al Carrito</button>
        </div>
    </>
)}

export default ItemCount