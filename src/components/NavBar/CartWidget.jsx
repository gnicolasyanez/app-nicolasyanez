import { BsCart4 } from 'react-icons/bs';
import { useCartContext } from '../../context/cartContext';
import './CartWidget.css'



function CartWidget() {

    const { cartList, vaciarCarrito } = useCartContext()

    return (
        <div>
              {cartList.map(prod => <li key={prod.id}>{prod.nombre} - cant: {prod.cantidad}</li>)}
              <button onClick={vaciarCarrito}>Vaciar carrito</button>
        </div>
        // <BsCart4 className='cartWidget'/>
    )
}

export default CartWidget
