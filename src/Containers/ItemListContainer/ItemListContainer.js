import React, { useEffect, useState } from "react";
import  ItemList from '../ItemList/ItemList';
import { Products } from "../../Components/Mock/Products";
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
        <>
        <div className="m-5">
        <div className="text-center m-5">
            <h1 className="font-bold text-2xl text-center m-5">Cerveceria Hipatia</h1>
            <hr className="divider"/>
            <p className="font-semibold text-lg">Aquí podrás encontrar la mejor cerveza artezanal del País, ademas podras hacerte de nuestros servicios para tus mejores fiestas.</p>
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
    </>

    );
};

export default ItemListContainer