import React from "react"
import logo from '../../assets/hipatia.png'
import { carrito } from '../CartWitget/CartWitget'
import './NavBar.css'

const NavBar = () => {
    return (
      <header>
        <a className="logo" href="#"><img src={logo} alt="Logo"></img></a>
        <nav>
          <a href="#">Nosotros</a>
          <a href="#">Cervezas</a>
          <a href="#">Tienda</a>
          <a href="#">Contactanos</a>
          <carrito/>
        </nav>  
      </header>
    )
}

export default NavBar