import logo from './logo.svg';
import './App.css';
import Menu from './component/Navbar/Menu';
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemListContainer from './component/ItemListContainer/ItemListContainer';

function App() {
  return (
    <div className="App" onClick={ ()=>console.log() }>

        <p>
         FUTURO E-COMMERCE YAÑEZ
        </p>
      <Menu />
      <ItemListContainer greeting='Bienvenidos a mi Futuro E-Commerce'/>

      <header className="App-header">
        
        
        
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          
        </a>
      </header>
    </div>
    
  );
}

export default App;
