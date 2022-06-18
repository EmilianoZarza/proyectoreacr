import React from "react"
import logo from '../../img/helenalogo.png'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const NavBar = () => {
    return (
      <div>
        <a href="#"><img src={logo} alt="Logo" ></img></a>
        <h1>Helena - Cerveza Artezanal</h1>
        <nav>
          <a href="#">Nosotros</a>
          <a href="#">Cervezas</a>
          <a href="#">Tienda</a>
          <a href="#">Contactanos</a>
        </nav>
        <ShoppingCartIcon color="disabled"/>
      </div>
    )

}

export default NavBar