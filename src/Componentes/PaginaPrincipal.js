import Categorias from "./Categorias/Categorias"
import Contenido from "./Contenido/Contenido"
import FooterLibreria from "./Footer/FooterLibreria"
import MenuLibreria from "./Menu/MenuLibreria"
import TituloLibreria from "./Titulo/TituloLibreria"
import './PaginaPrincipal.css'


export default function PaginaPrincipalLibreria(){
    const titulo = "Libreria"
    return(
        <>
            <body>
                <div className="grid--layaut">
                    <div className="contenedor cont1">
                        <TituloLibreria  titulo={titulo}/>
                    </div>
                     <div className="contenedor cont2">
                        <MenuLibreria/>
                    </div> 
                    <div className="contenedor cont3">
                        <Contenido/>
                    </div>
                    <div className="contenedor cont4">
                        <Categorias/>
                    </div>
                    <div className="contenedor cont5">
                        <FooterLibreria/>
                    </div>
                </div>
            </body>
        </>
    )
}