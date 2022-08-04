import { useState, useContext } from "react"
import { cartContext } from "../Context/CartContext"
import {db} from '../../firebase/firebase'
import {addDoc, collection, serverTimestamp, getDocs, query, orderBy, limit} from 'firebase/firestore'
import { Link } from "react-router-dom"


const Formulario = ()=>  {
    const {products, qtyProducts, clear} = useContext(cartContext);

    const form = {
        name:'',
        email:'',
        phone:'',
        observaciones:''
    }
    const [orderId, setOrderId] = useState(null);

    const [datos, setDatos] = useState(form)

    const capturarDatos = (e)=> {
        const {name, value} = e.target;
        setDatos({...datos, [name]:value})}

	let total = 0;
		for (let i = 0; i < products.length; i++) {
		total += products[i].price * products[i].qty;
	}

    const guardarDatos = async(e)=>{
        e.preventDefault();
        try {
            await addDoc (collection(db,'ventas'),{
                ...datos, 
                items: products,  
                date: serverTimestamp(),
				cantidad: qtyProducts,
				total:total,
            })

            const q = query(collection(db, "ventas"), orderBy("date", "desc"), limit(1));

            const querySnapshot = await getDocs(q);
            querySnapshot.forEach((doc) => {
            setOrderId(doc.id);
            });
            
            clear();

        } catch (error) {
            console.log(error);
        }

        setDatos({...form})
    }
    

if (orderId){
  return(
        <>
        <div className="py-5 text-center mt-5">
            <h2 className="font-bold text-2xl text-center m-5">¡Gracias por elegirnos!</h2>
			<hr className="divider"/>
            <h4 className="font-semibold text-xl text-center m-5">La compra se ha realizado exitosamente.</h4>
            <strong className="text-red-500 text-2xl">El numero de tu pedido es {orderId}</strong> <br/>
            <Link to={`/`}>
				<button className="m-5 p-2 font-light bg-red-200 text-black drop-shadow-md rounded-md overflow-hidden hover:bg-red-300">Volver al inicio</button>
            </Link>
        </div>
    </>)}

    return (
        <>
        	<h3 className="font-bold text-2xl text-center m-5">Ingresa tus datos</h3>
        	<hr className="divider"/>
        	<form onSubmit={guardarDatos} className="flex flex-col justify-content m-10 p-2 gap-3 bg-red-50">
				<label>Nombre</label>
            	<input name="name" className="bg-red-100 p-2" placeholder="Ingrese su Nombre" type="text" onChange={capturarDatos} value={datos.formName} required/>
            	<label>Correo electronico</label>
				<input name= "email" className="bg-red-100 p-2" placeholder="Ingrese su Email" type="email" onChange={capturarDatos} value={datos.formEmail} required/>
        		<label>Teléfono</label>
				<input name="phone" className="bg-red-100 p-2" placeholder="Telefono de contacto" type="number" onChange={capturarDatos} value={datos.formPhone} required/>
            	<label>Observaciones</label>
				<input name="observaciones" className="bg-red-100 p-2" placeholder="Escriba su comentario aquí" type="text" onChange={capturarDatos} value={datos.formCard} required/>
            	<button className='text-center bg-gray-50 hover:bg-red-300 text-black font-bold py-2 px-4 rounded'>Confirmar Compra</button>
        	</form>
    	</>
    )

}

export default Formulario