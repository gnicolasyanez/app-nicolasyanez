import s from "../ItemDetailContainer/ItemDetail.module.css"
import { useState } from "react"
import ItemCount from "../ItemListContainer/ItemCount"
import { Link } from "react-router-dom"

const ItemDetail = ({producto}) => {

    const [show , setShow ] = useState(true)
    const onAdd = (counter)=> {
        setShow(false)
        // sumarAlCarrito({ ...producto, cantidad:counter})
    }
    
    
    return (
        <div className={s.gridcontainer}>
            <div className={s.nombre}>
            {producto.nombre}
            </div>
            <div classNames={s.imagen}>
            <img src={producto.img} width="85px" height="85px"/>
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
