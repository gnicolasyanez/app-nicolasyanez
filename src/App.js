import logo from './logo.svg';
import './App.css';
import Menu from './component/Navbar/Menu';
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemListContainer from './component/ItemListContainer/ItemListContainer';
import ItemCount from './component/ItemCount/ItemCount'

function App() {
  return (
    <div className="App" onClick={ ()=>console.log() }>

        <p>
         FUTURO E-COMMERCE YAÑEZ
        </p>
      <Menu />
      <ItemListContainer greeting='Bienvenidos a mi Futuro E-Commerce'/>
     

      
    </div>
    
  );
}

export default App;
