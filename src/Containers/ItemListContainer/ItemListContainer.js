import React, { useEffect, useState } from "react";
import  ItemList from '../ItemList/ItemList';
import {Products } from "../../Components/Mock/Products";
import { useParams } from "react-router-dom";
import ClipLoader from "react-spinners/ClipLoader";

    const promise = new Promise ((res, rej) => {
        setTimeout(() => {
            res(Products);
        }, 2000);
    });


const ItemListContainer = ({ greeting }) => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    const { type } = useParams();
    console.log(type)

        useEffect(() => {
            const getitems = () => {
                promise
                .then((products) => {
                    const getProducts = products.filter(x => x.type === type)
                    type ? setProducts(getProducts) : setProducts(products)
                })
                .catch((error) => {
                    console.error("error: ", error);
                })
                .finally(() => {
                    setLoading(false);
                });
            };
            getitems();
        },[type]);

    return(
        <main className="m-5">
            <div>
                <div className="text-center m-5">
                    <h1 className="font-bold text-xl">Cerveceria Artezanal Hipatia</h1>
                    <p className="font-semibold text-lg">En nuestra tienda podras encontrar la mejores cervezas artezanales del Pais.</p>
                </div>
            </div>
            {loading ? (
            <div className="text-center m-10">
                <ClipLoader color={"#ee1d23"} loading={loading} size={150} />
            </div>
            ) : (
            <div className="grid grid-cols-3 gap-2 bg-gray-100 text-black drop-shadow-md rounded-md overflow-hidden">
                <ItemList products={products} />
            </div>
            )}
        </main>

    );
};

export default ItemListContainer