import React, { useEffect, useState } from "react";
import {ItemDetail}  from "../ItemDetailContainer/ItemDetail";
import ClipLoader from "react-spinners/ClipLoader";
import { useParams } from 'react-router-dom';
import { db } from '../../firebase/firebase';
import { getDoc, collection, doc } from "firebase/firestore";


const ItemDetailContainer = () => {
const [product, setProduct] = useState([]);
const [loading, setLoading] = useState(true);
const [error] = useState(false);

const { id } = useParams();

    useEffect(() => {
        const productCollection = collection(db, 'Products');
        const refDoc = doc(productCollection, id);
        getDoc(refDoc)
        .then(result =>{
            const producto = {
                id: result.id,
                ...result.data(),
            }
            setProduct(producto);
        })
        .catch(() => {            
        })
        .finally(() => {
            setLoading(false)})
    }, [id]);
    
    return(
        <>
        {loading ? (
            <div className="flex justify-center">
                <ClipLoader color={"#ee1d23"} loading={loading} size={150} />
            </div>
        ): error ? (
            <h2>Lo sentimos, hubo un error</h2>
        ) : (
            <ItemDetail product={product} />
        )}
        </>
    );
};

export default ItemDetailContainer