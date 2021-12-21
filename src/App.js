import logo from './logo.svg';
import './App.css';
import Menu from './component/Menu';

function App() {
  return (
    <div className="App" onClick={ ()=>console.log() }>

      <header className="App-header">
        
        
        <p>
         FUTURO E-COMMERCE YAÑEZ
        </p>

        <Menu />
        
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
