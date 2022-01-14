import './Item.css';
import { Card } from "react-bootstrap"
import { Button } from "react-bootstrap" 
import ItemCount from "./ItemCount"
import { Link } from 'react-router-dom';

function Item({ nombre, imagen, categoria, precio, descripcion, stock, id }) {

    return (
        
        <div 
        key={id}
        className="divItem">
            <Card style={{ width: '18rem' }}>
            

                <Card.Body>
                <Card.Img variant="top" src={imagen} width="5px"/>
                    <Card.Title>{nombre}</Card.Title>
                    <Card.Text>
                        {descripcion}
                    </Card.Text>
                        <Link to={`/categoria/${categoria}`}></Link>
                    <p>{precio}</p>
                    <ItemCount stock={stock}/>
                    <div className='divButtonCardItem'>
                        <Link to={`/detalle/${id}`}>
                        <Button variant="dark" className='buttonCardItem'>Detalle del producto</Button>
                        </Link>
                    </div>
                </Card.Body>
            </Card>
        </div>
    )
}

export default Item
