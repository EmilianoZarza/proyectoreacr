import React from "react";

export const ItemDetail = ({product}) => {
    return (
        <div>
            <img src={product.img} alt={product.name}></img>
            <h1>{product.name}</h1>
            <span>{product.pice}</span>
            <p>{product.type}</p>
        </div>
    )
}