import React from "react";
import { Item } from "../ItemList/Item";

const styles = {
  container:{
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    flexWrap: "wrap",
  }
}

export const ItemList = ({ products }) => {
  return (
    <div style={styles.container}>
      {products.map((product) => (
        <Item key={product.id} product={product} />
      ))}
    </div>
  );
};