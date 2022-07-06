import React from "react";
import { ItemCount } from "../../Components/ItemCount/ItemCount";

export const Item = ({ product }) => {
  
  return (
    <div>
      <div>
        <img src={product.url} alt={product.name} />
      </div>
      <h3>{product.name}</h3>
      <p>${product.price}</p>
      <p>stock disponible:{product.stock}</p>
      <ItemCount stock = {product.stock}/>

    </div>
  );
};