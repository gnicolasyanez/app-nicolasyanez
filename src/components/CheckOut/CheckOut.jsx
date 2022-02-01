// import { useEffect, useState } from 'react';
// import { Form, Row, Col, Button } from 'react-bootstrap';
// import { Link, useNavigate } from "react-router-dom";
// import { FaShoppingCart } from "react-icons/fa";

// import { useCartContext } from '../../context/cartContext';
// import { useOrderContext } from '../../context/orderContext';
// import './ChekOut.css';

// function CheckOut() {

//     const {cartList, globoCarrito, sumaCarrito}= useCartContext()
//     const {agregarOrden} =useOrderContext()
//     const cartResumeCant = globoCarrito()
//     const sumaCart=sumaCarrito()
//     const [validated, setValidated]=useState(false)
//     const [procesarLaOrden, setProcesarLaOrden]=useState(false)
 
//     const [datosForm, setDatosForm] = useState({
//         nombre:'',
//         apellido: '',
//         email:'',
//         direccion:'',
//         ciudad:'',
//         cp:'',
//         telefono:''
//     });

//     let navegar=useNavigate();


//     // const ordenProcess = async () => {
//     //     return 
//     //    }
  
//     function handleChange(e){
//         setDatosForm({
//                 ...datosForm,
//             [e.target.name]: e.target.value
//         })
//     }
    

//     useEffect(() => {
//         if(procesarLaOrden){
//             agregarOrden(datosForm)
//             navegar("/cart/ProcessOrder")
//             }
//     })

//     const handleSubmit = (event) => {
//         const form = event.currentTarget;

//         if (form.checkValidity() === false) {
//           event.preventDefault();
//           event.stopPropagation();
//         }else{
//             event.preventDefault();
//             event.stopPropagation();
//             setProcesarLaOrden(true)
//         }
//             setValidated(true);
       

//       };

// return <>
//    <div className="rowCheckOut">
//             <div className="col-75-CK">
//                 <div className="containerCheckOut">
                
//                 <Form noValidate validated={validated} onSubmit={handleSubmit}>
//                             <Row className="mb-3">
//                                 <Form.Group as={Col} controlId="formGridEmail">
//                                 <Form.Label>Nombre</Form.Label>
//                                 <input className= "form-control" placeholder="Nombre" name='nombre'  onChange={handleChange} value={datosForm.nombre} required/>
//                                 </Form.Group>

//                                 <Form.Group as={Col} controlId="formGridApellido">
//                                 <Form.Label>Apellido</Form.Label>
//                                 <input className= "form-control" placeholder="Apellido" name='apellido' onChange={handleChange} value={datosForm.apellido}required/>
//                                 </Form.Group>                                
                                
//                                 <Form.Group as={Col} controlId="formGridCorreo">
//                                 <Form.Label>Correo Electronico</Form.Label>
//                                 <input className= "form-control" type="email" placeholder="correo@sucorreo.com" name='email' onChange={handleChange} value={datosForm.email}required/>
//                                 </Form.Group>
                                
//                             </Row>

//                             <Form.Group className="mb-3" controlId="formGridAddress1">
//                                 <Form.Label>Direccion</Form.Label>
//                                 <input className= "form-control prevent-validation" placeholder="Avenida Siempre Viva 742" name='direccion' onChange={handleChange} value={datosForm.direccion}/>
//                            </Form.Group>

//                             <Row className="mb-3">
//                                 <Form.Group as={Col} controlId="formGridCiudad">
//                                     <Form.Label>Ciudad</Form.Label>
//                                     <input className= "form-control prevent-validation" placeholder="Ciudad" name='ciudad' onChange={handleChange} value={datosForm.ciudad}/>
//                                 </Form.Group>

//                                 <Form.Group as={Col} controlId="formGridZipCode">
//                                      <Form.Label>Codigo Postal</Form.Label>
//                                      <input className= "form-control prevent-validation" placeholder="Codigo Postal" name='cp' onChange={handleChange} value={datosForm.cp}/>
//                                 </Form.Group>

//                             <Form.Group as={Col} controlId="formGridTelefono">
//                             <Form.Label>Telefono</Form.Label>
//                             <input className= "form-control prevent-validation" placeholder="Telefono" name='telefono' onChange={handleChange} value={datosForm.telefono}/>
//                             </Form.Group>
//                         </Row>

//                      {/* <Link to="/cart/ProcessOrder"> */}
//                         <Button type="submit" className='button cartBotonComprar'>Comprar</Button>
//                         {/* onClick={()=>ordenProcess()}*/}
//                     {/* </Link>  */}
//                     <br/>
//                     <br/>
//                     </Form> 
// </div>
//             </div>
//             <div className="col-25-CK ">
//                  <div className="containerCheckOut">
//                         <h4>Carrito <span className="price" ><FaShoppingCart/> <b>{cartResumeCant}</b></span></h4>
//                                 {cartList.map(productosCart => 
//                                     <>
//                                     <div key={productosCart.id}>{productosCart.titulo} x {productosCart.qty}u<span className="price">${productosCart.qty*productosCart.precio}</span></div>
//                                     <br/>
//                                     </>)}
//                         <br/>
//                         <p>Total de la Compra<span className="priceTotal" ><b>${sumaCart}</b></span></p>
//                         <Link to="/cart">
//                                           <button className="cartBotonModificar">Modificar</button>
//                         </Link>
//                         <br/>
//                     </div>
//                 </div>
// </div>
//   </>;
// }

// export default CheckOut;





// import React from 'react';
// import {Form, Row, Col, Button} from 'react-bootstrap'
// import { useCartContext } from '../../context/cartContext';
// import {FaShoppingCart} from "react-icons/fa"
// import { Link } from "react-router-dom";
// import './CheckOut.css'



// function CheckOut() {
//     const {cartLista, globoCarrito, sumaCarrito}= useCartContext() cartList, vaciarCarrito, precioTotal

//     const vaciarCarrito = vaciarCarrito()
//     const precioTotal=precioTotal()

// return <>
//    <div className="rowCheckOut">
//             <div className="col-75-CK">
//                 <div className="containerCheckOut">
//                         <Form>
//                             <Row className="mb-3">
//                                 <Form.Group as={Col} controlId="formGridEmail">
//                                 <Form.Label>Nombre</Form.Label>
//                                 <Form.Control placeholder="Nombre" />
//                                 </Form.Group>

//                                 <Form.Group as={Col} controlId="formGridApellido">
//                                 <Form.Label>Apellido</Form.Label>
//                                 <Form.Control placeholder="Apellido" />
//                                 </Form.Group>                                
                                
//                                 <Form.Group as={Col} controlId="formGridCorreo">
//                                 <Form.Label>Correo Electronico</Form.Label>
//                                 <Form.Control type="email" placeholder="correo@sucorreo.com" />
//                                 </Form.Group>
                                
//                             </Row>

//                             <Form.Group className="mb-3" controlId="formGridAddress1">
//                                 <Form.Label>Direccion</Form.Label>
//                                 <Form.Control placeholder="Avenida Siempre Viva 742" />
//                             </Form.Group>

//                             <Row className="mb-3">
//                                 <Form.Group as={Col} controlId="formGridCiudad">
//                                     <Form.Label>Ciudad</Form.Label>
//                                     <Form.Control />
//                                 </Form.Group>

//                                 <Form.Group as={Col} controlId="formGridZipCode">
//                                      <Form.Label>Codigo Postal</Form.Label>
//                                      <Form.Control />
//                                 </Form.Group>

//                             <Form.Group as={Col} controlId="formGridTelefono">
//                             <Form.Label>Telefono</Form.Label>
//                             <Form.Control />
//                             </Form.Group>
//                         </Row>

//                     <Button className='cartBotonComprar'>Comprar</Button>
//                     <br/>
//                     <br/>
//                     </Form>
// </div>
//             </div>
//             <div className="col-25-CK ">
//                  <div className="containerCheckOut">
//                         <h4>Carrito <span className="price" ><FaShoppingCart/> <b>{vaciarCarrito}</b></span></h4>
//                                 {cartList.map(productosCart => 
//                                     <>
//                                     <div key={productosCart.id}>{productosCart.titulo} x {productosCart.qty}u<span className="price">${productosCart.qty*productosCart.precio}</span></div>
//                                     <br/>
//                                     </>)}
//                         <br/>
//                         <p>Total de la Compra<span className="priceTotal" ><b>${sumaCart}</b></span></p>
//                         <Link to="/cart">
//                                           <button className="cartBotonModificar">Modificar</button>
//                         </Link>
//                         <br/>
//                     </div>
//                 </div>
// </div>
//   </>;
// }

// export default CheckOut;