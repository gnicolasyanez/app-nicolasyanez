import './ItemListContainer.css'
import ItemList from './ItemList'
import { useState , useEffect } from 'react'
import { getFetch } from '../../helpers/mock'
import { useParams } from 'react-router-dom'
// import { collection, getDocs, getFirestore, query } from 'firebase/firestore'

import { collection, doc, getDoc, getDocs, getFirestore, query, where } from 'firebase/firestore'


function ItemListContainer({ greeting }) {
    
    const [productos, setProductos] = useState([])
    const [loading, setLoading] = useState(true)
    const [bool, setBool] = useState(true)

     const {idCategoria} = useParams()

    useEffect(() => {

        const db = getFirestore()
        if (idCategoria) {
            const queryCollection = query(
                collection(db, 'productos') ,
                where('categoria', '==', idCategoria)
            )

            getDocs(queryCollection)

            .then(res => setProductos(res.docs.map(prod => ({ id: prod.id, ...prod.data() }) ) ))
            .catch(err => err)
            .finally(() => setLoading(false))
        } else {
            const queryCollection = collection(db, 'productos')
            getDocs(queryCollection)

            .then(res => setProductos(res.docs.map(prod => ({ id: prod.id, ...prod.data() }) ) ))
            .catch(err => err)
            .finally(() => setLoading(false))
            
        }
        
    }, [idCategoria])

    console.log(idCategoria)
    console.log(productos)
    
    const handleClick=(e)=>{
        e.preventDefault()
        setBool(!bool)
    }

    const handleAgregar=()=>{
        setProductos([
            ...productos,
            {id: "1", nombre: "cubierta michelin", url: 'https://mlstaticquic-a.akamaihd.net/neumatico-dunlop-grandtrek-pt3-25555-r18-D_NQ_NP_756351-MLU29508057639_022019-F.jpg/', categoria: "asfalto" , precio: 1000}
        ])
    }

    console.log('ItemListContainer')
    console.log(productos)


    return (
        <div className='divItemListContainer'>
            <h1 className='saludo'>{greeting}</h1>
            <button onClick={handleClick}>Cambiar estado </button>           
            <button onClick={handleAgregar}>Agregar Item </button> 

            { loading ? <h3>Aguarde unos segundos, Cargando...</h3>
             : 
            <ItemList productos={productos} /> 
            }
        </div>
    )
}

export default ItemListContainer
        
        
        




       



        // if (idCategoria) {
        //     getFetch
        // .then(resp => setProductos(resp.filter(prod => prod.categoria === idCategoria)))
        // .catch(err => console.log(err))
        // .finally(() => setLoading(false))
        // } else {
        //     getFetch
        //     .then(resp => setProductos(resp))
        //     .catch(err => console.log(err))
        //     .finally(() => setLoading(false))
    
        // }
        
        
    
