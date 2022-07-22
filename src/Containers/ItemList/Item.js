import React from 'react';
import { Link } from 'react-router-dom';

const Item = ({  product }) => {

    return (
        <div className="">
            <div className="">
                <div className="">
                    <img src={product.url} alt={product.name} />
                </div>
                <div className="">
                    <h3 className="">{product.name}</h3>
                    <p className="">${product.price}</p>
                    <Link to={`/categories/${product.type}/${product.id}`} className="">
                        <button className="">Ver detalles del {product.type}</button>
                    </Link>
                </div>
                <div className="">
                {/* <Link onClick={product.id} to={`/categories/${product.type}/${product.id}`} className="d-block"><button className="btn btn-dark mx-5">Ver detalles del {product.type}</button></Link> */}
                <p className="">Stock disponible : {product.stock}</p>
                </div>
            </div>
        </div>
    );
};

export default Item