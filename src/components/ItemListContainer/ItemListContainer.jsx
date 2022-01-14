import './ItemListContainer.css'
import ItemList from './ItemList'
import { useState , useEffect } from 'react'
import { getFetch } from '../../helpers/mock'
import { useParams } from 'react-router-dom'

function ItemListContainer({ greeting }) {
    
    const [productos, setProductos] = useState([])
    const [loading, setLoading] = useState(true)

     const {idCategoria} = useParams()

    useEffect(() => {

        if (idCategoria) {
            getFetch
        .then(resp => setProductos(resp.filter(prod => prod.categoria === idCategoria)))
        .catch(err => console.log(err))
        .finally(() => setLoading(false))
        } else {
            getFetch
            .then(resp => setProductos(resp))
            .catch(err => console.log(err))
            .finally(() => setLoading(false))
    
        }
        
        
    }, [idCategoria])

    console.log(idCategoria)
    console.log(productos)
    

    return (
        <div className='divItemListContainer'>
            <h1 className='saludo'>{greeting}</h1>
            { loading ? <h3>Aguarde unos segundos, Cargando...</h3>
             : 
            <ItemList productos={productos} /> 
            }
        </div>
    )
}

export default ItemListContainer
