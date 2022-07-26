import React from "react";
import logo from '../../assets/hipatia.png';
import CartWidget  from "../CartWitget/CartWitget";
import { Link, NavLink } from 'react-router-dom';

function Navbar() {

    const categoria = [
        { name: "Productos", route: "/categories/Producto", id: "Producto" },
        { name: "Servicios", route: "/categories/Servicio", id: "Servicio" }
    ];

    return (
        <nav className="flex justify-between m-3 items-center bg-red-100">
                <Link to="/"><img className="w-32 m-3" src={logo} alt="logo" /></Link>
                <div>
                    <ul>
                        {categoria.map((categories) => (<NavLink key={categories.id} to={categories.route} className="m-3 p-3 font-light bg-gray-50 text-black drop-shadow-md rounded-md overflow-hidden">{categories.name}</NavLink>))}
                    </ul>
                </div>
                <NavLink to="/Cart">
                    <CartWidget />
                </NavLink>
        </nav>
    );
}

export default Navbar