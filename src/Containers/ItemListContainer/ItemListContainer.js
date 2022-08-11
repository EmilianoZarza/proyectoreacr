import React, { useEffect, useState } from "react";
import  ItemList from '../ItemList/ItemList';
import { useParams } from "react-router-dom";
import ClipLoader from "react-spinners/ClipLoader";
import { db } from "../../firebase/firebase";
import { getDocs, collection, query, where } from "firebase/firestore";



const ItemListContainer = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    const { type } = useParams();

        useEffect(() => {
            
            const q =  type
            ? query(collection(db, 'Products'), where('type', '==', type))
            : collection(db, 'Products');

            getDocs(q)
            .then(result => {
                const lista = result.docs.map(doc => {
                    return{
                        id: doc.id,
                        ...doc.data(),
                    }
                })
                setProducts(lista)
            })
            .catch((error) => {
            })
            .finally(() => {
                setLoading(false);
            });

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
        <div className="grid grid-cols-3 gap-5 m-10">
            <ItemList products={products} />
        </div>
        )}
    </>

    );
};

export default ItemListContainer