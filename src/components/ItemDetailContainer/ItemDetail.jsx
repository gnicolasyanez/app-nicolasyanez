import s from "../ItemDetailContainer/ItemDetail.module.css"

const ItemDetail = ({producto}) => {


    
    
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
            
        </div>
    )
}

export default ItemDetail
