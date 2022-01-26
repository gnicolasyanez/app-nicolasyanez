import {BrowserRouter, Routes, Route} from 'react-router-dom'
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import CartWidget from './components/NavBar/CartWidget';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemCount from './components/ItemListContainer/ItemCount';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { CartContextProvider } from './context/cartContext';
import CheckOut from './components/CheckOut/CheckOut';




const App = ()=> {

  return (
  <CartContextProvider>
    <div>
      <BrowserRouter>
      
        <NavBar />
        <Routes>
             <Route exact path='/' element={<ItemListContainer greeting='Bienvenidos a NEUMACAR!' />} />
             <Route exact path='/categoria/:idCategoria' element={<ItemListContainer greeting='Bienvenidos a NEUMACAR!' />} />
             <Route exact path='/detalle/:idDetalle' element={<ItemDetailContainer />} />  
             <Route exact path='/cart' element={<CartWidget />} />
            
             <Route exact path ='/CheckOut' element={<CheckOut />}/>              
        </Routes>
      </BrowserRouter>
    </div>  
  </CartContextProvider>  
  );

}

export default App
