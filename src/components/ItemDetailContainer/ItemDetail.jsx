import s from "../ItemDetailContainer/ItemDetail.module.css"
import { useState } from "react"
import ItemCount from "../ItemListContainer/ItemCount"
import { Link } from "react-router-dom"
import { useCartContext } from "../../context/cartContext"

const ItemDetail = ({producto}) => {

    const {agregarAlCarrito} = useCartContext()

    const [show , setShow ] = useState(true)
    function onAdd(counter) {
        console.log(counter) 
        agregarAlCarrito( {...producto, cantidad: counter} )
        setShow(false)
        // sumarAlCarrito({ ...producto, cantidad:counter})
    }
    
    
    return (
        <div className={s.gridcontainer}>
            <div className={s.title}>
            {producto.title}
            </div>
            <div classNames={s.imageUrl}>
            <img src={producto.imageUrl} width="85px" height="85px"/>
            </div>
            <div className={s.categoria}>
            {producto.categoria}
            </div>
            <div className={s.descripcion}>
            {producto.descripcion}
            </div>
            <div className={s.precio}>
            {producto.precio}
            </div>     
            {show ? <ItemCount stock={producto.stock} onAdd={onAdd}/> : 
        <div>    
            <Link to="/cart"><button class="buttonCardItem btn btn-dark">Terminar compra</button></Link>
            <Link to="/"><button class="buttonCardItem btn btn-dark">Seguir comprando</button></Link>
        </div>    }  
            
        </div>
    )
}

export default ItemDetail
