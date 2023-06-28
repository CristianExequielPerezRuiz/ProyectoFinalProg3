import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import './Registro.css'
import { Button } from 'react-bootstrap';
import { useState } from 'react';
import { Link } from 'react-router-dom';


function Registro() {
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');
    const [nombre,setNombre]=useState('');
    const [apellido,setApellido]=useState('');
    const [domicilio,setDomicilio]=useState('');
    const [telefono,setTelefono]=useState('');

    const handleSubmit=(e)=>{
        e.preventDefault();
        localStorage.setItem('emailRegistrado',email)
        localStorage.setItem('passwordRegistrado',password)
        localStorage.setItem('apellidoRegistrado',apellido)
        localStorage.setItem('nombreRegistrado',nombre)
        localStorage.setItem('domicilioRegistrado',domicilio)
        localStorage.setItem('telefonoRegistrado',telefono)

        alert("Registro Existoso")

        setEmail("")
        setPassword("")
        setNombre("")
        setApellido("")
        setDomicilio("")
        setTelefono("")
    }
    


  return (
    <body className='body_Registro'>
      <div className="grid-layaut-registro">
        <div className="contein_registro">
            <h1>Registro</h1>
          <Form className="frmRegistro" onSubmit={handleSubmit}>
            <Row className="mb-3">
              <Form.Group as={Col}>
                <Form.Label>Ingrese su Email</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter email"
                  value={email}
                  onChange={(ev) => {
                    setEmail(ev.target.value);
                  }}
                />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridPassword">
                <Form.Label>Ingrese su contraseña</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Password"
                  value={password}
                  onChange={(ev) => {
                    setPassword(ev.target.value);
                  }}
                />
              </Form.Group>
            </Row>

            <Row className="mb-3">
              <Form.Group as={Col}>
                <Form.Label>Nombre</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Juan"
                  value={nombre}
                  onChange={(ev) => {
                    setNombre(ev.target.value);
                  }}
                />
              </Form.Group>

              <Form.Group as={Col}>
                <Form.Label>Apellido</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Perez"
                  value={apellido}
                  onChange={(ev) => {
                    setApellido(ev.target.value);
                  }}
                />
              </Form.Group>
            </Row>

            <Row className="mb-3">
              <Form.Group as={Col}>
                <Form.Label>Domicilio</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Dimicilio"
                  value={domicilio}
                  onChange={(ev) => {
                    setDomicilio(ev.target.value);
                  }}
                />
              </Form.Group>

              <Form.Group as={Col}>
                <Form.Label>Telefono</Form.Label>
                <Form.Control
                  type="number"
                  placeholder="Telefono"
                  value={telefono}
                  onChange={(ev) => {
                    setTelefono(ev.target.value);
                  }}
                />
              </Form.Group>
            </Row>
            
            <Button variant='success' className="btn_Registro" type="submit" >
                Guardar
            </Button>

            <Link to="/">
              <Button className="btn_Registro" type="submit" >
                Volver al Login
              </Button>
            </Link>
          </Form>
        </div>
      </div>
    </body>
  );
}

export default Registro;