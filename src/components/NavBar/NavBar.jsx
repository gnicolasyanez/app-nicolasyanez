import './NavBar.css'
import { Link } from 'react-router-dom'
import logo from '../../assets/logo.png';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import CartWidget from './CartWidget';


function NavBar() {

    return (
        <div>
            <Navbar bg="light" variant="light">
            <a href="#inicio"><img src={logo} alt="logo" className="logo" /></a>
                <Container>
                    <Link to='/'>NEUMACAR</Link>
                    <Nav className="me-auto">
                        <Link to="/">Inicio</Link>
                        <Link to="/categoria/asfalto">Asfalto</Link>
                        <Link to="/categoria/trial">Trial</Link>
                    </Nav>
                    <Link to='/cart'>
                    <CartWidget />
                    </Link>
                </Container>
            </Navbar>
        </div>

    )
}

export default NavBar


  

  