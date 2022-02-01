
// creación del contexto
import { useState, useContext, createContext } from 'react'
import CartWidget from '../components/NavBar/CartWidget'

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
console.log(cartList)
    // function globoCarrito(){
    
    //     const totalProducts=cartList.map(productCart=>productCart.qty).reduce((prev,curr) => prev+curr,0)
               
    // return totalProducts
    // }

    // function sumaCarrito(){

    //     const sumaTotalCarrito =cartList.map(valorTotalCarrito=>valorTotalCarrito.qty*valorTotalCarrito.precio).reduce((prev,curr)=> prev+curr,0)

    // return sumaTotalCarrito
    // }
    

    function agregarAlCarrito(items) {
         // -1 sino lo encuenta
         const indice=cartList.findIndex(i => i.id === items.id) // 0,1,2
         
         if (indice > -1){
             const qtyVieja=cartList[indice].cantidad
            console.log(qtyVieja)
             let qtyNueva= qtyVieja + items.cantidad
 
             cartList[indice].cantidad=qtyNueva
             
             let arrAux = [...cartList]
             
             setCartList(arrAux)
 
         }else{
            setCartList([...cartList, items])
         }
    }

    
    // function vaciarCarrito() {
    //     setCartList([])
    // }

    // console.log(cartList)

    // const deleteItem = (id) =>{
    //     const itemFiltrado = cartList.filter((producto)=>producto.id !== id)
    //     setCartList(itemFiltrado);
    // }

    // const total =() => {
    //     const totalCarrito = cartList.reduce((prev, curr) => prev + curr.precio * curr.cantidad, 0);
    //     return totalCarrito
    // }

    const precioTotal =()=>{
        return cartList.reduce((acum, prod) => acum + (prod.cantidad * prod.precio) , 0)
      }
  
    const borrarItem = (id) => {
        setCartList( cartList.filter(prod => prod.id !== id) )
    }

    const cantidadItem = () =>{
        return cartList.reduce( (acum, item)=> acum = acum + item.cantidad , 0)
    }

    
    function vaciarCarrito() {
        setCartList([])
    }

    console.log(cartList)


    return(
        <cartContext.Provider value={{
            cartList,
            agregarAlCarrito,
            vaciarCarrito,
            precioTotal,
            borrarItem,
            cantidadItem

        }} >
            {children}
        </cartContext.Provider>
    )
}