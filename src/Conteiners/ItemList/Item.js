import React from "react";
import { ItemCount } from "../../Components/ItemCount/ItemCount";

const styles = {
  container: {
    width: window.innerHeight > 900 ? "25%" : "90%",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    margin: 20,
    textAlign: "center",
    backgroundColor: "white",
    borderRadius: 20,
  },
  imgContainer: {
    width: "100%",
    height: 300,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  img: {
    width: "11%"
  }
};

export const Item = ({ product }) => {
  
  return (
    <div style={styles.container}>
      <div style={styles.imgContainer}>
        <img style={styles.img} src={product.url} alt={product.name} />
      </div>
      <h3>{product.name}</h3>
      <p>${product.price}</p>
      <p>stock disponible:{product.stock}</p>
      <ItemCount stock = {product.stock}/>

    </div>
  );
};