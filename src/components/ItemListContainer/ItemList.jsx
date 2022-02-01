import './ItemList.css';
import Item from './Item'
import {memo} from 'react'

const ItemList = memo( ( { productos } )=>  {
    console.log('itemList')

    return (
        <div className='divItemList'>
            { productos.map(prod => <Item key={prod.id} nombre={prod.nombre} imagen={prod.img} categoria={prod.categoria} precio={prod.precio} descripcion={prod.descripcion} stock={prod.stock} id={prod.id} />) }
        </div>
    )
}

, (oldProps, newProps)=> oldProps.productos.lenght === newProps.productos.lenght)

export default ItemList
