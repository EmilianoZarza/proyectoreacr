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
    <div>
      <div>
      <img src={logo} alt="logo" />
      <h1 >Cerveza Artezanal {name}</h1>
      </div>
      <div>
        <nav>
          {categorias.map((element) => {
            return (
              <a key={element.id} href={element.route}>
                {element.name}
              </a>
            );
          })}
        </nav>
        <CartWidget />
      </div>
    </div>
  );
};