import React from 'react';
import { Link } from 'react-router-dom';

const Item = ({  product }) => {

    return (
        <div className="p-1 bg-red-50 text-black drop-shadow-md rounded-md overflow-hidden">
            <div className="">
                <div>
                    <img src={product.url} alt={product.name} />
                </div>
                <div>
                    <h3 className="font-bold text-xl m-2 text-center">{product.name}</h3>
                </div>
                <div className='m-5'>
                    <p className="m-1 p-1 font-light bg-gray-50 text-black drop-shadow-md rounded-md overflow-hidden">Precio : ${product.price}</p>
                    <p className="m-1 p-1 font-light bg-gray-50 text-black drop-shadow-md rounded-md overflow-hidden">Stock disponible : {product.stock}</p>
                </div>
                <div className='text-center p-2 m-5 font-mono bg-gray-50 text-black drop-shadow-md rounded-md overflow-hidden hover:bg-red-300'>
                    <Link to={`/categories/${product.type}/${product.id}`} className="">
                            <button>Detalles del {product.type}</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Item