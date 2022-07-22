import React, { useContext } from 'react';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { red } from '@mui/material/colors';
import { cartContext } from '../Context/CartContext';


    const CartWidget = () => {

        const { qtyProducts } = useContext(cartContext);

    return (
        <button className="">
    <ShoppingCartIcon sx={{ color: red[500], fontSize: 25, marginRight: 1 }} />
    {qtyProducts >= 1 ?
    <p className='m'>{qtyProducts}</p> : (false)}
        </button>
    )
}

export default CartWidget