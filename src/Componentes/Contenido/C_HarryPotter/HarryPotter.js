import { Link } from 'react-router-dom'
import './HarryPotter.css'
import { Accordion, Button } from 'react-bootstrap'
export default function HarryPotter(){
    return (
      <body className="body_HP">
        <div className="grid-layaut-HarryPotter">
          <div className="cajasHP cHP1">
            <img
              src="https://www.pasajeslibros.com/static/img/portadas/_visd_0001JPG0EHKJ.jpg"
              className="img_cHP1"
            ></img>
          </div>
          <div className="cajasHP cHP2">
            <h2 className="texto_descripcion">
              Harry Potter y la Piedra Filosofal
            </h2>
            <p className="texto_descripcion">
              Este fascinante libro narra la historia de Harry Potter, un niño
              huérfano que descubre que es un mago y es invitado a asistir a
              Hogwarts, una escuela de magia y hechicería. El libro se centra en
              el primer año de Harry en Hogwarts y su enfrentamiento con el
              misterio de la Piedra Filosofal. El eje central de la trama es la
              búsqueda de la Piedra Filosofal, un objeto legendario que concede
              la vida eterna y la riqueza infinita. Harry y sus amigos se
              embarcan en una aventura para proteger la piedra de aquellos que
              desean utilizar su poder con fines oscuros. A medida que se
              adentran en los misterios de Hogwarts y desentrañan enigmas
              antiguos, Harry descubre más sobre su propio pasado y su conexión
              con Lord Voldemort.
            </p>
          </div>
          <div className="cajasHP cHP3">
            <div className="venta_libro">
              <ul className="ul_venta">
                <li className="venta_lista precio">$27000</li>
                <li className="venta_lista">
                  <Button className="btn_carrito" variant="success">
                    Añadir al carrito
                  </Button>
                </li>
                <li className="venta_lista ">
                  <Accordion>
                    <Accordion.Item eventKey="0">
                      <Accordion.Header>Detalles del Libro</Accordion.Header>
                      <Accordion.Body>
                        <b>EDITORIAL</b>: GODOT EDICIONES
                        <br />
                        <b>ISBN</b>: 9789878928470
                        <br />
                        <b>PESO</b>: 1000
                      </Accordion.Body>
                    </Accordion.Item>
                  </Accordion>
                </li>
                <li className="venta_lista ultimo_item_li">
                  <Link to="/paginaprincipallibreria">
                    <Button variant="secondary" className="volver">
                      Volver
                    </Button>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </body>
    );
}