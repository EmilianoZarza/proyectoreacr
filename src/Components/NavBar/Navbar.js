import React from "react";
import logo from '../../assets/hipatia.png';
import CartWidget  from "../CartWitget/CartWitget";
import { Link, NavLink } from 'react-router-dom';

function NavBar() {

    const categoria = [
        { name: "Productos", route: "/categories/Producto", id: "Producto" },
        { name: "Servicios", route: "/categories/Servicio", id: "Servicio" }
    ];

    return (
        <nav className="flex justify-between m-3 items-center bg-red-100">
            <div className=" flex ml-3 items-center">
                <Link to="/"><img className="w-32 m-3" src={logo} alt="logo" /></Link>
                {/* <button class="navbar-toggler ms-1" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button> */}
                <div className="m-2 bg-gray-50 ">
                    <ul>
                        {categoria.map((categories) => (<NavLink key={categories.id} to={categories.route}>{categories.name}</NavLink>))}
                    </ul>
                </div>
                <NavLink to="/Cart">
                    <CartWidget />
                </NavLink>
            </div>
        </nav>
    );
}

export default Navbar