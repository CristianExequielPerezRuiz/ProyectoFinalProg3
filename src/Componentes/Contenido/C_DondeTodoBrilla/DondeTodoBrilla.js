import { Link } from 'react-router-dom'
import './DondeTodoBrilla.css'
import { Accordion, Button } from 'react-bootstrap'
export default function DondeTodoBrilla(){
    return (
      <body className="body_DTB">
        <div className="grid-layaut-DTB">
          <div className="cajasDTB cDTB1">
            <img
              src="https://images.cdn3.buscalibre.com/fit-in/360x360/a0/f7/a0f78bdb7f9ec86afdc102ab766caf37.jpg"
              className="img_cDTB1"
            ></img>
          </div>
          <div className="cajasDTB cDTB2">
            <h2 className="texto_descripcion">
              Donde todo Brilla
            </h2>
            <p className="texto_descripcion">
            Y si lo unico que necesitamos para ser felices es descubrir el brillo de las cosas intangibles? Nicki Aldrich y River Jackson han sido inseparables desde que llegaron al mundo con cuarenta y siete minutos de diferencia. Ella lo hizo envuelta en polvo de hadas. El comosi fuese un meteoro en llamas. El peque\o pueblo costero donde crecieron se convirtio en el escenario de sus paseos en bicicleta, las tardes en la casa del arbol y los primerosamores, secretos y dudas. Sin embargo, con el paso de los a\os, River sue\a con escapar de aquel rincon perdido donde todo gira alrededor dela tradicional pesca de langosta y Nicki anhela encontrar sulugar en el mundo.
            </p>
          </div>
          <div className="cajasDTB cDTB3">
            <div className="venta_libro">
              <ul className="ul_venta">
                <li className="venta_lista precio">$7000</li>
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