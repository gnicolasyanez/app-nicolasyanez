import './Item.css';
import { Card } from "react-bootstrap"
import { Button } from "react-bootstrap" 

import { Link, NavLink } from 'react-router-dom';
import { useState } from 'react'

//const Item = ({producto}) => {

function Item({ title, producto, imageUrl, categoria, precio, descripcion, stock, id }) {
 
    
    return (
        
        <div 
        key={id}
        className="divItem">
            <Card style={{ width: '18rem' }}>
            

                <Card.Body>
                <Card.Img variant="top" src={imageUrl} width="5px"/>
                    <Card.Title><div>
                        {`${title} - ${categoria}`}
                    </div>
                </Card.Title>
                    <Card.Text>
                        {descripcion}
                    </Card.Text>
                        <Link to={`/categoria/${categoria}`}></Link>
                    <p>{precio}</p>
                    
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
