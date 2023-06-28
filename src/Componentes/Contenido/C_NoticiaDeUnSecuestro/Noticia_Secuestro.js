import { Link } from 'react-router-dom'
import './Noticia_Secuestro.css'
import { Accordion, Button } from 'react-bootstrap'
export default function Noticia_Secuestro(){
    return (
      <body className="body_NC">
        <div className="grid-layaut-NC">
          <div className="cajasDTB cNC1">
            <img
              src="https://3.bp.blogspot.com/-Fr1U2l_-w3c/Vi_MQEnetoI/AAAAAAAACnc/_I3pnCecEi4/s1600/noticia-de-un-secuestro.jpg"
              className="img_cNC1"
            ></img>
          </div>
          <div className="cajasDTB cNC2">
            <h2 className="texto_descripcion">
            Noticia de un secuestro
            </h2>
            <p className="texto_descripcion">
            "Noticia de un secuestro" es una obra que combina la realidad periodística con la maestría literaria de Gabriel García Márquez. Te ofrece una visión cruda y conmovedora de la problemática del secuestro en Colombia, al tiempo que te sumerge en una historia absorbente y te invita a reflexionar sobre temas sociales y humanos fundamentales. Leer este libro te permitirá conocer una faceta distinta de la obra de García Márquez y te brindará una experiencia de lectura impactante y reveladora.            </p>
          </div>
          <div className="cajasDTB cNC3">
            <div className="venta_libro">
              <ul className="ul_venta">
                <li className="venta_lista precio">$12000</li>
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