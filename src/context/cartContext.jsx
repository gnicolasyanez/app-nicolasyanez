
// creación del contexto
import { useState, useContext, createContext } from 'react'

// crei el contexto
const cartContext = createContext([])

// funcion que me evita importar el useContext en todos los archivos ...
export function useCartContext() {
    return useContext(cartContext)
}



// creacion del componente que maneja el contexto

export const CartContextProvider = ({children}) => {
    //estados y funciones globales
    const [cartList, setCartList] = useState([])


    function agregarAlCarrito(items) {
         // -1 sino lo encuenta
         const indice=cartList.findIndex(i => i.id === items.id) // 0,1,2
       
         if (indice > -1){
             const qtyVieja=cartList[indice].cantidad
 
             let qtyNueva= qtyVieja + items.cantidad
 
             cartList[indice].cantidad=qtyNueva
             
             let arrAux = [...cartList]
             
             setCartList(arrAux)
 
         }else{
            setCartList([...cartList, items])
         }
    }
    
    function vaciarCarrito() {
        setCartList([])
    }

    console.log(cartList)

    return(
        <cartContext.Provider value={{
            cartList,
            agregarAlCarrito,
            vaciarCarrito
        }} >
            {children}
        </cartContext.Provider>
    )
}