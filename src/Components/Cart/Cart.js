import React, { useContext } from "react";
import { Link } from 'react-router-dom';
import ItemCart from "./ItemCart";
import { cartContext } from "../Context/CartContext";


    const Cart = () => {

        const { qtyProducts, products, clear, addProducts } = useContext(cartContext)

        return(
            <>
                {qtyProducts === 0
                ? 
                <div className="flex item-center">
                    <div className="text-center">
                        <h1 className="font-bold">Cerveceria Artezanal Hipatia</h1>
                        <hr className="divider"/>
                        <h2 className="font-semibold">Aún no tienes Productos o Servicios en el Carrito, <Link to="/" className="text-black py-2">Click aqui para Comprar</Link></h2>
                    </div>
                </div> 
                :  (
                    <div className="flex">
                        <div className="text-center">
                            <h1 className="font-bold">Cerveceria Artezanal Hipatia</h1>
                            <hr className=""/>
                        <div className="">
                            <table className="">
                                <thead className="">
                                    <tr>
                                        <th scope="col">ID</th>
                                        <th scope="col">Nombre</th>
                                        <th scope="col">Precio</th>
                                        <th scope="col">Cantidad</th>
                                        <th scope="col">
                                            <button onClick={() => clear()} className="">Limpiar</button>
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {products.map(product => <ItemCart key={product.id} product={product}/>)}
                                </tbody>
                                <tfoot>
                                    <tr>
                                        <td colSpan="2">Total</td>
                                        <td className=""><p className="">${products.reduce((acc, el) => acc + (el.qty * el.price), 0)}</p></td>
                                        <td></td>
                                        <button className="">Finalizar compra</button>
                                    </tr>
                                </tfoot>
                            </table>
                        </div>
                    </div>
                </div>)}
            </>
        );
    };

export default Cart
