import { useCartContext } from "../../context/cartContext"
import { addDoc, collection, doc, documentId, getDocs, getFirestore, query, updateDoc, where, writeBatch } from "firebase/firestore"
import { useState } from "react"
import Resumen from "../Resumen/Resumen"



const Cart = () => {
    const { cartList, vaciarCarrito, precioTotal } = useCartContext ()
    const [condicional, setCondicional] = useState(false);
    const [dataForm , setDataForm ] = useState({
        email: '',
        name: '',
        phone: ''
    });
    const [idOrden, setIdOrden] = useState('');

    const realizarCompra = async (e) => {
        e.preventDefault()   
         // Nuevo objeto de orders    
        let orden = {}
        //orden.date = Timestamp.fromDate(new Date())        

        orden.buyer = dataForm // {name, email, phone}
        orden.total = precioTotal();

        orden.items = cartList.map(cartItem => {
            const id = cartItem.id;
            const nombre = cartItem.title;
            const precio = cartItem.precio * cartItem.cantidad;
            const cantidad = cartItem.cantidad
            
            return {id, nombre, precio, cantidad}   
        }) 

        // guardar la orden en firestore
        const db = getFirestore()

        const oredenCollection = collection(db, 'ordenes')
        await addDoc(oredenCollection, orden) // setDoc
        .then(resp => setIdOrden(resp.id))
        .catch(err => console.log(err))
        //.finally(() => console.log('cargando'))

        // actualizando
        
        // const orderDoc = doc(db, 'items', '6eM60FtSwRMzywcrTonV')
        // updateDoc(orderDoc, {
        //     stock: 98
        // })

        // actualizar stock
        const queryCollection = collection(db, 'productos')

        //console.log(cleccionNoti)
        const queryActulizarStock = query(
            queryCollection, 
            where( documentId() , 'in', cartList.map(it => it.id))          
        ) 

        const batch = writeBatch(db)       
        
        await getDocs(queryActulizarStock)
        .then(resp => resp.docs.forEach(res => batch.update(res.ref, {
                stock: res.data().stock - cartList.find(producto => producto.id === res.id).cantidad
            }) 
        ))
        .catch(err => console.log(err))
        .finally(()=> console.log('stock actualizado'))

        batch.commit()
        setCondicional(true)    
    }

    function handleChange(e) {
        // console.log(e.target.name)
        // console.log(e.target.value)
        setDataForm({
            ...dataForm,
            [e.target.name]: e.target.value
        })
    }
    console.log(dataForm)
    
    return (
        <div>  
            {
                condicional  ? 
                    <Resumen idOrden={idOrden} />
                : 
                    <>
                        {cartList.map(prod => <li key={prod.id}>{prod.title} - cant: {prod.cantidad}</li>)}
                        <button onClick={vaciarCarrito}>Vaciar Carrito</button>
                        <form 
                            onSubmit={realizarCompra} 
                            //onChange={handleChange} 
                        >
                            <input 
                                type='text' 
                                name='name' 
                                placeholder='name' 
                                onChange={handleChange}
                                value={dataForm.name}
                            /><br />
                            <input 
                                type='text' 
                                name='phone'
                                placeholder='tel' 
                                onChange={handleChange}
                                value={dataForm.phone}
                            /><br/>
                            <input 
                                type='email' 
                                name='email'
                                placeholder='email' 
                                onChange={handleChange}
                                value={dataForm.email}
                            /><br/>
                            <button>Generar Orden</button>
                        </form>
                        {/* <button onClick={realizarCompra}>Generar Orden</button> */}
                    </>

            }          
        </div>
    )
}

export default Cart