import React from "react";
import { ItemCount } from "../../Components/ItemCount/ItemCount";
import "./Item.css"

export const Item = ({ product }) => {
  
  return (
    <div className="card">
      <div>
        <img src={product.url} alt={product.name} />
      </div>
      <div className="p-5 flex flex-col gap-3">
        <div className="flex items-center gap-2">
          <p className="badge">${product.price}</p>
          <p className="badge">stock disponible:{product.stock}</p>
        </div>
        <h2 className="product-title" title={product.name}>{product.name}</h2>
        <ItemCount stock = {product.stock}/>
      </div>
    </div>
  );
};