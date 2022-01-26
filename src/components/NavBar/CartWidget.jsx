import { useContext } from 'react';
import { BsCart4 } from 'react-icons/bs';
import './CartWidget.css'
import { useCartContext } from '../../context/cartContext';




function CartWidget() {

    const { cartList, vaciarCarrito, sumaCarrito, deleteItem, total  } = useCartContext()
    // const sumaCart=sumaCarrito()
    
    return (
        <div>
             <BsCart4 className='cartWidget'/>
              {cartList.map(prod =>
              <div>
         
              <li key={prod.id}>{prod.nombre} - cant: {prod.cantidad}</li>
              <button onClick={()=> deleteItem(prod.id)}>x</button>
              <h3>{total()}</h3>
              </div>
              )}
              <button className='buttonCardItem btn btn-dark' onClick={vaciarCarrito}>Vaciar carrito</button>
              

              
        </div>
       
    )
}

export default CartWidget
