import React from 'react'
import styles from '../ItemListContainer/ItemListContainer.module.css'
import { useState, useEffect } from 'react'
import ItemCount from '../ItemCount/ItemCount';
import { getFetch } from '../../helper/mock'
import ItemList from './ItemList'

// const ItemListContainer = ({greeting}) => {
//     return (
//         <div className={styles.Titulo}>
//           <h1>{greeting}</h1>
//         </div>

function ItemListContainer({ greeting }) {
  // const [count, setCount] = useState(0);
  // const [fechaYHora, setFechaYHora] = useState(Date);

  // const handleCount = () => {
  //   setCount(count + 2);
  //   setFechaYHora(Date);
  // };
  // console.log('llamada api');
  // console.log('ItemListContainer');
  // return (
  //   <div>
  //     <h2>{greeting}</h2>
  //     {count} <br />
  //     {fechaYHora} <br />
  //     <button onClick={handleCount}>+</button>
  //     {
  //        <ItemCount stock={"5"} />
  //     }
  //   </div>
  // );
  const [productos, setProductos] = useState([])
  const [loading, setLoading] = useState(true)


  useEffect(() => {
      cargaPromesa
      .then(resp => setProductos(resp))
      .catch(err => console.log(err))
      .finally(() => setLoading(false))

  }, [])

  return (
      <div>
        {cargando ?
        <h2 className='centerText'>
          Cargando contenido <CargandoSpinner />
        </h2> :
        <ItemList productos={productos} />
        }
      </div>
  );
}
//     )
// }

export default ItemListContainer

