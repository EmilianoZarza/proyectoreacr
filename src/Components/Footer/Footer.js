import React from "react";
import logo from '../../assets/hipatialetras.png';
import { Link, NavLink } from 'react-router-dom';


function Footer() {

    return(
        <footer className="p-4 bg-red-100 rounded-lg shadow md:px-6 md:py-8">
            <div className="md:flex sm:items-center sm:justify-between">
                <a href="#" className="flex items-center mb-4 sm:mb-0">
                    <img src={logo} className="mr-3 h-20 w-30" alt="Hipatia Logo" />
                    <span className="self-center ml-3 text-2xl font-light whitespace-nowrap text-black">Cerveceria Artezanal</span>
                </a>
                <ul className="flex flex-wrap items-center mb-6 text-sm text-black sm:mb-0">
                    <li>
                        <a href="#" className="mr-4 hover:underline md:mr-6 ">About</a>
                    </li>
                    <li>
                        <a href="#" className="mr-4 hover:underline md:mr-6">Privacy Policy</a>
                    </li>
                    <li>
                        <a href="#" className="mr-4 hover:underline md:mr-6 ">Licensing</a>
                    </li>
                    <li>
                        <a href="#" className="hover:underline">Contact</a>
                    </li>
                </ul>
            </div>
            <hr className="my-6 border-black" />
            <span className="block text-sm text-black sm:text-center">© 2022 <a href="#" className="hover:underline">Cerveceria Hipatia</a>. Derechos Reservados.
            </span>
        </footer>

    );
}

export default Footer











