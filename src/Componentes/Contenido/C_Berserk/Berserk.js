import { Link } from 'react-router-dom'
import './Berserk.css'
import { Accordion, Button } from 'react-bootstrap'
export default function Berserk(){
    return (
      <body className="body_B">
        <div className="grid-layaut-B">
          <div className="cajasDTB cB1">
            <img
              src="https://images.cdn1.buscalibre.com/fit-in/360x360/24/e9/24e94a2bf598461343415bd45a5e188b.jpg"
              className="img_cB1"
            ></img>
          </div>
          <div className="cajasDTB cB2">
            <h2 className="texto_descripcion">
              Berserk
            </h2>
            <p className="texto_descripcion">
            Es un manga y anime creado por Kentaro Miura. La historia se sitúa en un mundo oscuro y medieval, donde los humanos se enfrentan a criaturas demoníacas y fuerzas sobrenaturales.
            El protagonista de la historia es Guts, un guerrero solitario y brutal que busca venganza contra los demonios conocidos como "Apóstoles" que le arrebataron todo lo que amaba. Guts lleva consigo una enorme espada llamada "Dragon Slayer" y es conocido por su habilidad y ferocidad en la batalla.
            </p>
          </div>
          <div className="cajasDTB cB3">
            <div className="venta_libro">
              <ul className="ul_venta">
                <li className="venta_lista precio">$11000</li>
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