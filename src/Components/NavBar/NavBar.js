import React from "react"
import logo from '../../img/helenalogo.png'
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
        </nav>
      </header>
    )

}

export default NavBar