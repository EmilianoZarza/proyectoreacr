import React, { useContext } from 'react';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { red } from '@mui/material/colors';
import { cartContext } from '../Context/CartContext';


    const CartWidget = () => {

        const { qtyProducts } = useContext(cartContext);

    return (
        <button>
    <ShoppingCartIcon sx={{ color: red[500], fontSize: 30, marginRight: 5 }} />
    {qtyProducts >= 1 ?
    <p className=''>{qtyProducts}</p> : (false)}
        </button>
    )
}

export default CartWidget