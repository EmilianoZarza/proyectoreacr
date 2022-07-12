import React from 'react';
import { Link } from 'react-router-dom';

const Item = ({  product }) => {

    return (
        <div>
            <div>
                <div>
                    <img src={product.url} alt={product.name} />
                </div>
                <div>
                    <h3>{product.name}</h3>
                    <p>${product.price}</p>
                </div>
                <Link onClick={product.id} to={`/categories/${product.type}/${product.id}`}><button>Ver detalles del {product.type}</button></Link>
                <p>Stock disponible : {product.stock}</p>
            </div>
        </div>
    );
};

export default Item