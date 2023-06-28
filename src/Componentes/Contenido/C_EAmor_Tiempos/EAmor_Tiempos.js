import { Link } from 'react-router-dom'
import './EAmor_Tiempos.css'
import { Accordion, Button } from 'react-bootstrap'
export default function EAmor_Tiempos(){
    return (
      <body className="body_EATC">
        <div className="grid-layaut-EATC">
          <div className="cajasDTB cEATC1">
            <img
              src="https://static.cegal.es/imagenes/marcadas/9788497/978849759245.gif"
              className="img_cEATC1"
            ></img>
          </div>
          <div className="cajasDTB cEATC2">
            <h2 className="texto_descripcion">
              El Amor en los Tiempos del Colera
            </h2>
            <p className="texto_descripcion">
            "El amor en los tiempos del cólera" es una obra maestra de la literatura que te transportará a un mundo de pasiones ardientes, reflexiones profundas y una prosa deslumbrante. Es una historia de amor inolvidable y un retrato magistral de la sociedad y la cultura. Leer esta novela te permitirá sumergirte en el universo literario de García Márquez y disfrutar de una experiencia literaria enriquecedora y conmovedora.</p>
          </div>
          <div className="cajasDTB cEATC3">
            <div className="venta_libro">
              <ul className="ul_venta">
                <li className="venta_lista precio">$8000</li>
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