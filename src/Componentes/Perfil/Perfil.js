import { Button } from "react-bootstrap";
import "./Perfil.css";
import { Link } from "react-router-dom";
import Datos from "../Datos/Datos";
export default function Perfil() {
  return (
        <>
      <body className="body_perfil">
        <div className="grid-layaut-perfil">
          <div className="cont-perfil cj-prf1">
            <ul className="titulolista">
              <h3 className="subtitulos">Productos Digitales</h3>
              <li className="lista">
                <Button className="btn_mis_datos" variant="primary">
                  Mis Ebooks
                </Button>
              </li>
              <li className="lista">
                <Button className="btn_mis_datos" variant="success">
                  Mis AudioLibros
                </Button>
              </li>
            </ul>
          </div>
          <div className="cont-perfil cj-prf2">
            <ul>
              <h3 className="subtitulos">Mis Datos</h3>
              <li className="lista">
                <Button className="btn_mis_datos" variant="primary">
                  Datos Personales
                </Button>
              </li>
              <li className="lista">
                <Button className="btn_mis_datos" variant="success">
                  Datos de Facturacion
                </Button>
              </li>
              <li className="lista">
                <Button className="btn_mis_datos" variant="warning">
                  Mis Direcciones
                </Button>
              </li>
            </ul>
          </div>
          <div className="cont-perfil cj-prf3">
                <ul className="titulolista">
                    <h3 className="subtitulos">Mis Pedidos</h3>
                    <li className="lista">
                        <Button className="btn_mis_datos" variant="primary">
                            Seguimiento de Pedidos
                        </Button>
                    </li>
                    <li className="lista">
                        <Link to="/paginaprincipallibreria">
                            <Button className="btn_mis_datos" variant="danger">
                                Volver
                            </Button>
                        </Link>
                    </li>
                </ul>
          </div>
          <div className="cont-perfil cj-prf4"><Datos/></div>
        </div>
      </body>
    </>
  );
}
