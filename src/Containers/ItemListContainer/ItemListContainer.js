import React, { useEffect, useState } from "react";
import {ItemList}  from "../ItemList/ItemList";
import { Products } from "../../Components/Mock/Products";
import ClipLoader from "react-spinners/ClipLoader";

const promise = new Promise((res, rej) => {
  setTimeout(() => {
    res(Products);
  }, 1000);
});

export const ItemListContainer = ({ greeting }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    promise
      .then((products) => {
        setProducts(products);
      })
      .catch((error) => {
        console.error("error: ", error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <div className = "text-center m-10 text-xl">
      <h1 className = "text-center m-10 text-xl font-bold">{greeting}</h1>
      {loading ? (
        <span>
          <ClipLoader color={"red"} loading={loading} size={150} />
        </span>
      ) : (
        <ItemList products={products} />
      )}
    </div>
  );
};