import './NavBar.css'
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
                    <Navbar.Brand href="#inicio">FUTURO E-COMMERCE</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="#inicio">Inicio</Nav.Link>
                        <Nav.Link href="#galeria">Galeria</Nav.Link>
                        <Nav.Link href="#tienda">Tienda</Nav.Link>
                    </Nav>
                    <CartWidget />
                </Container>
            </Navbar>
        </div>

    )
}

export default NavBar


  

  