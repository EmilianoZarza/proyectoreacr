import React from "react";
import logo from "../../assets/hipatia.png";
import CartWidget from "../CartWitget/CartWitget";

export const Navbar = ({name}) => {
  const categorias = [
    { name: "Nosotros", route: "#", id: 1 },
    { name: "Cervezas", route: "#", id: 2 },
    { name: "Galeria", route: "#", id: 3 },
    { name: "Contactanos", route: "#", id: 4 }
  ];

  return (
    <div className="flex justify-between m-3 items-center bg-red-100">
      <div>
        <a href="#"><img src={logo} alt="logo" className = "w-32 m-3"/></a>
      </div>
      <div>
        <nav>
          {categorias.map((element) => {
            return (
              <a className="font-bold px-3 py-2 text-slate-700 rounded-lg hover:bg-slate-100 hover:text-slate-900" key={element.id} href={element.route}>
                {element.name}
              </a>
            );
          })}
          <CartWidget />
        </nav>
      </div>
    </div>
  );
};
