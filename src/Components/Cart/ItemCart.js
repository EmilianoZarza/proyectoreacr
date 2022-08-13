import React, { useContext } from "react";
import { cartContext } from "../Context/CartContext";

const ItemCart = ({product}) => {

    const { deleteProduct } = useContext(cartContext)

    return (
        <tr>
            <td className="p-2">{product.name}</td>
            <td>${product.price}</td>
            <td>{product.qty}</td>
            <td>
                <button onClick={() => deleteProduct(product.id)} className="bg-gray-200 text-xs font-bold text-white p-1 hover:bg-white hover:text-black rounded-md ">
                    Eliminar
                </button>
            </td>
        </tr>
    )
}

export default ItemCart