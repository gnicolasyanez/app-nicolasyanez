import './Item.css';
import { Card } from "react-bootstrap"
import { Button } from "react-bootstrap" 
import ItemCount from "./ItemCount"

function Item({ nombre, imagen, precio, descripcion, stock }) {

    return (

        <div className="divItem">
            <Card style={{ width: '18rem' }}>
            

                <Card.Body>
                <Card.Img variant="top" src={imagen} width="5px"/>
                    <Card.Title>{nombre}</Card.Title>
                    <Card.Text>
                        {descripcion}
                    </Card.Text>
                    <p>{precio}</p>
                    <ItemCount stock={stock}/>
                    <div className='divButtonCardItem'>
                        <Button variant="dark" className='buttonCardItem'>Detalle del producto</Button>
                    </div>
                </Card.Body>
            </Card>
        </div>
    )
}

export default Item
