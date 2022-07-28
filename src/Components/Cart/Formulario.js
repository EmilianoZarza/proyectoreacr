import React, { useContext, useState } from "react";
import { db } from "../../firebase/firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { cartContext } from "../Context/CartContext";

    const Formulario = () => {
        const { products, qtyProducts } = useContext(cartContext);

        const [idVenta, setidVenta] = useState({
                nombre:'',
                apellido:'',
                telefono:'',
                email:'',
                observaciones:'',
            })
        

        const createidVenta = ({target}) => {
            setidVenta({
                ...idVenta,
                [target.name] : target.value
            })
        }

        let total = 0;
        for(let i = 0; i < products.length; i++){
        total += products[i].price * products[i].qty;
    }

        const finishBuy = () => {
            const ventasCollection = collection(db, 'ventas');
            addDoc(ventasCollection,{
                idVenta,
                items: products,
                date: serverTimestamp(),
                cantidad: qtyProducts,
                total: total,
            })

            .then((result) => {
                setidVenta(result.id)
            })
        }
    

        return (
            <>
                <h3 className="font-bold text-2xl text-center m-5">Ingresa tus datos</h3>
                <hr className="divider"/>
                <form onSubmit={finishBuy} className="flex flex-col justify-content m-10 gap-3 bg-red-50">
                    <label>Nombre</label>
                    <input onChange={createidVenta} type="text" name="nombre" className="bg-red-100" required></input>
                    <label>Apellido</label>
                    <input onChange={createidVenta} type="text" name="apellido" className="bg-red-100" required></input>
                    <label>Telefono</label>
                    <input onChange={createidVenta} type="number" name="telefono" className="bg-red-100" required></input>
                    <label>Email</label>
                    <input onChange={createidVenta} type="email" name="email" className="bg-red-100"></input>
                    <label>Observaciones</label>
                    <input onChange={createidVenta} type="message" name="observaciones" className="bg-red-100"></input>
                    <submit onClick={finishBuy} className="m-5 p-2 text-center font-light bg-red-200 text-black drop-shadow-md rounded-md overflow-hiddenr" type="submit">
                        Finalizar Compra
                    </submit>
                </form>
            </>
        );
        }


export default Formulario