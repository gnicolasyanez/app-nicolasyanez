// import React , { useState} from 'react'
// import PropTypes from 'prop-types'


// const ItemCount = ({stock, initial, onAdd}) => {
    
//     const [ counter , setCounter ] = useState(0);
//     console.log(counter)


//     const sumar = () => {
//         counter <= 4 ?
//          setCounter ( counter + 1 )
//          :
//          setCounter ( counter )
//     }

    
    
//     const restar = () => {
//         counter > 0 ?
//         setCounter (counter - 1)
//         :
//         setCounter ( counter )
//     }

//     const resetear = () => {
//         setCounter (0)
//     }    

//     return (
//         <div>
//             <h1>Agregar al carrito</h1>
//             <h2> {counter}</h2>
//             {
//                 stock >= 1 ? 
//                 <button onClick={sumar}>+</button>
              
//                 :
//                 <button>+</button>

//             }
            
//             <button onClick={restar}> - </button>
//             <button onClick={resetear}>Reset</button>
//         </div>
//      )
// }

// ItemCount.propTypes = {
//     value: PropTypes.number
// }

// export default ItemCount

import {useState} from 'react'
import '../ItemCount/ItemCount.module.css'

function ItemCount({ stock }) {

    const initial = 1

    const [counter, setCounter] = useState(1)

    const handleDecrement = () => {

        counter > initial ? setCounter(prev => prev - 1) : console.log('1 es el mínimo de compra')

    }

    const handleIncrement = () => {
       
        counter < stock ? setCounter(prev => prev + 1) : console.log('Llegó al máximo de productos')
       
    }


    return (
        <div className='itemCount'>
            <button onClick={handleDecrement} className='buttonItemCount'><strong>-</strong></button>
            <h3 className='h3Counter'>{counter}</h3>
            <button onClick={handleIncrement} className='buttonItemCount'><strong>+</strong></button>
        </div>
    )
}

export default ItemCount