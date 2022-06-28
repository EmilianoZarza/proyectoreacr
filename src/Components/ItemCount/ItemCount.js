import React, { useState } from "react";

const ItemCount = ({stock}) => {

  const [cuenta, setCuenta] = useState (0)

  const sumar = () => {
    cuenta < stock && setCuenta(cuenta +1)
    cuenta>= stock && alert('Ya no quedan articulos')
  }
  const restar = () => {
    if(cuenta > 0){
      setCuenta (cuenta - 1)
    }
  }

  const onAdd = () => {
    alert(`Gracias por comprar ${cuenta} articulos`)
  }

  return (
    <>
      <div>
        <button onClick={restar}>-</button>
        <p>{cuenta}</p>
        <button onClick={sumar}>+</button>
      </div>
      <button onClick={onAdd}>Comprar</button>
    </>
  )
}

export default ItemCount