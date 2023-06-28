import { Link } from 'react-router-dom'
import './DonQuijote.css'
import { Accordion, Button } from 'react-bootstrap'
export default function DonQuijote(){
    return (
      <body className="body_DQ">
        <div className="grid-layaut-DQ">
          <div className="cajasDTB cDQ1">
            <img
              src="https://images.cdn1.buscalibre.com/fit-in/360x360/a6/18/a618be10eae5c2a608ec6e22e6917e29.jpg"
              className="img_cDQ1"
            ></img>
          </div>
          <div className="cajasDTB cDQ2">
            <h2 className="texto_descripcion">
              Don Quijote de la Mancha
            </h2>
            <p className="texto_descripcion">
            El Quijote es una experiencia enriquecedora y divertida, que te sumergirá en un mundo de aventuras, humor, sátira y reflexión. Además, te permitirá apreciar el legado literario de Cervantes y comprender por qué esta obra maestra sigue siendo tan influyente en la literatura y la cultura hasta el día de hoy. </p>
          </div>
          <div className="cajasDTB cDQ3">
            <div className="venta_libro">
              <ul className="ul_venta">
                <li className="venta_lista precio">$17000</li>
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