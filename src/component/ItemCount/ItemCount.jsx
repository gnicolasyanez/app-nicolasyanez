import React , { useState} from 'react'
import PropTypes from 'prop-types'


const ItemCount = ({stock, initial, onAdd}) => {
    
    const [ counter , setCounter ] = useState(0);
    console.log(counter)


    const sumar = () => {
        counter <= 4 ?
         setCounter ( counter + 1 )
         :
         setCounter ( counter )
    }

    
    
    const restar = () => {
        counter > 0 ?
        setCounter (counter - 1)
        :
        setCounter ( counter )
    }

    const resetear = () => {
        setCounter (0)
    }    

    return (
        <div>
            <h1>Agregar al carrito</h1>
            <h2> {counter}</h2>
            {
                stock >= 1 ? 
                <button onClick={sumar}>+</button>
              
                :
                <button>+</button>

            }
            
            <button onClick={restar}> - </button>
            <button onClick={resetear}>Reset</button>
        </div>
     )
}

ItemCount.propTypes = {
    value: PropTypes.number
}

export default ItemCount
