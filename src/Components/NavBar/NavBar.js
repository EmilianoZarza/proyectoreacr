import React from "react";
import logo from "../../assets/hipatia.png";
import CartWidget from "../CartWitget/CartWitget";
import styles from "./Navbar.Styles";

export const Navbar = ({name}) => {
  const categorias = [
    { name: "Nosotros", route: "#", id: 1 },
    { name: "Cervezas", route: "#", id: 2 },
    { name: "Galeria", route: "#", id: 3 },
    { name: "Contactanos", route: "#", id: 4 }
  ];

  return (
    <div style={styles.container}>
      <div style={styles.branchContainer}>
      <img style={styles.logo} src={logo} alt="logo" />
      <h1 style={styles.title}>Cerveza Artezanal {name}</h1>
      </div>
      <div style={styles.links}>
        <nav>
          {categorias.map((element) => {
            return (
              <a style={styles.link} key={element.id} href={element.route}>
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