import ButtonGroup from "react-bootstrap/ButtonGroup";
import Button from "react-bootstrap/Button";
import "./MenuLibreria.css";
import { Link } from "react-router-dom";

export default function MenuLibreria() {
  return (
    <>
      <ButtonGroup aria-label="Basic example" className="grupoBotones">
        <Link className="grupoBotones" to="/paginaprincipallibreria">
          <Button className="grupoBotones" variant="outline-success">
            Pagina Principal
          </Button>
        </Link>
        <Link className="grupoBotones" to="/perfil">
          {" "}
          <Button className="grupoBotones" variant="outline-info">
            Perfil
          </Button>
        </Link>
        <Link className="grupoBotones" to="/axios">
          <Button className="grupoBotones" variant="outline-warning">
            Axios 
          </Button>
        </Link>
        <Link className="grupoBotones" to="/ajustes">
          <Button className="grupoBotones" variant="outline-secondary">
            Ajustes
          </Button>
        </Link>
        <Link className="grupoBotones" to="/salir">
          {" "}
          <Button className="grupoBotones" variant="outline-danger">
            Salir
          </Button>
        </Link>
      </ButtonGroup>
    </>
  );
}
