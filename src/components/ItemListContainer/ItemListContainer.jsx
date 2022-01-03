import './ItemListContainer.css'
import ItemList from './ItemList'
import { useState , useEffect } from 'react'
import { getFetch } from '../../helpers/mock'


function ItemListContainer({ greeting }) {
    
    const [productos, setProductos] = useState([])
    const [loading, setLoading] = useState(true)


    useEffect(() => {
        getFetch
        .then(resp => setProductos(resp))
        .catch(err => console.log(err))
        .finally(() => setLoading(false))

    }, [])

    return (
        <div className='divItemListContainer'>
            <h1 className='saludo'>{greeting}</h1>
            { loading ? <h3>Aguarde unos segundos, en breve se terminará de cargar</h3> : <ItemList productos={productos} /> }
        </div>
    )
}

export default ItemListContainer
