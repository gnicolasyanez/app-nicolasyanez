import { useContext } from 'react';
import { BsCart4 } from 'react-icons/bs';
import './CartWidget.css'
import { useCartContext } from '../../context/cartContext';




function CartWidget() {

    const { cartList,
            agregarAlCarrito,
            vaciarCarrito,
            precioTotal,
            borrarItem,
            cantidadItem } = useCartContext()
    
    
    return (
        <div>
             <BsCart4 className='cartWidget'/>
              {cartList.map(prod =>
              <div>
         
              <li key={prod.id}>{prod.nombre} - cant: {prod.cantidad}</li>
              <button onClick={()=> borrarItem(prod.id)}>X</button>
              <h3>{precioTotal()}</h3>
              </div>
              )}
              <button className='buttonCardItem btn btn-dark' onClick={vaciarCarrito}>Vaciar carrito</button>
              

              
        </div>
       
    )
}

export default CartWidget

// import './CartWidget.css'

// function CartWidget() {
//     return (
//         <div className='texto'>
//             Carrito
//         </div>
//     )
// }

// export default CartWidget
