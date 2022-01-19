import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { getFetch } from "../../helpers/mock"
import ItemDetail from "./ItemDetail"



const ItemDetailContainer = () => {
    const [producto, setProducto] = useState({})
    const {idDetalle} = useParams()
    useEffect(()=>{
       getFetch
       .then(resp => setProducto(resp.find(prod => prod.id === idDetalle)))
    }, [idDetalle])
    console.log(producto)
    return (
        
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <ItemDetail producto={producto} />
        </div>
        
    )
}

export default ItemDetailContainer



// function ItemListContainer({ greeting }) {
    
//     const [productos, setProductos] = useState([])
//     const [loading, setLoading] = useState(true)


//     useEffect(() => {
//         getFetch
//         .then(resp => setProductos(resp))
//         .catch(err => console.log(err))
//         .finally(() => setLoading(false))

//     }, [])

//     return (
//         <div className='divItemListContainer'>
//             <h1 className='saludo'>{greeting}</h1>
//             { loading ? <h3>Aguarde unos segundos, Cargando...</h3> : <ItemList productos={productos} /> }
//         </div>
//     )
// }

// export default ItemListContainer