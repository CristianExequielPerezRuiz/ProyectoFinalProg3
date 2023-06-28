import { Link } from "react-router-dom"
import './Categorias.css'

function VerificacionDePagina({paginaLista, direccion ,NombreDeLaPagina}){
    return paginaLista ? <li><Link to={`/${direccion}`}>{NombreDeLaPagina}</Link></li> : null
}

function SeleccionDeAutores({elAutorExiste, direccion ,NombreDelAutor}){
    return elAutorExiste ? <li><Link to={`/${direccion}`}>{NombreDelAutor}</Link></li> : null
}

export default function Categorias(){
    return(        
        <body className="cuerpoCategorias">
                <ul>
                    <h2 className="h2_tit">Categorias</h2>
                        <VerificacionDePagina paginaLista={true} direccion={"poesia"} NombreDeLaPagina={"Poesia"}/>
                        <VerificacionDePagina paginaLista={true} direccion={"arte"} NombreDeLaPagina={"Arte"}/>
                        <VerificacionDePagina paginaLista={true} direccion={"drama"} NombreDeLaPagina={"Drama"}/>
                        <VerificacionDePagina paginaLista={true} direccion={"amor"} NombreDeLaPagina={"Amor"}/>
                        <VerificacionDePagina paginaLista={true} direccion={"ficcion"} NombreDeLaPagina={"Ficcion"}/>
                        <VerificacionDePagina paginaLista={true} direccion={"educacion"} NombreDeLaPagina={"Educacion"}/>
                        <VerificacionDePagina paginaLista={true} direccion={"derecho"} NombreDeLaPagina={"Derecho"}/>
                        <VerificacionDePagina paginaLista={true} direccion={"salud"} NombreDeLaPagina={"Salud"}/>
                        <VerificacionDePagina paginaLista={true} direccion={"computacionytecnologia"} NombreDeLaPagina={"Computación Y Tecnología De La Información"}/>
                        <VerificacionDePagina paginaLista={true} direccion={"cienciaseconomicas"} NombreDeLaPagina={"Ciencias Económicas Sobre Finanzas, Empresa Y Gestión"}/>
                        <VerificacionDePagina paginaLista={true} direccion={"deportes"} NombreDeLaPagina={"Deportes Y Actividades De Ocio Al Aire Libre"}/>
                        <VerificacionDePagina paginaLista={true} direccion={"folosofiayreligion"} NombreDeLaPagina={"Filosofía Y Religión"}/>
                        <VerificacionDePagina paginaLista={true} direccion={"didacticos"} NombreDeLaPagina={"Infantiles, Juveniles Y Didácticos"}/>
                        <VerificacionDePagina paginaLista={true} direccion={"novelasgraficas"} NombreDeLaPagina={"Novelas Gráficas"}/>
                        <VerificacionDePagina paginaLista={true} direccion={"medicina"} NombreDeLaPagina={"Medicina, Enfermería Y Veterinaria"}/>
                        <VerificacionDePagina paginaLista={true} direccion={"cienciasnaturales"} NombreDeLaPagina={"Ciencias De La Tierra Y Medioambiente"}/>
                </ul>    
                <ul>
                    <h2 className="h2_tit">Autores</h2>
                        <SeleccionDeAutores elAutorExiste={true} direccion={"j_k_rowling"} NombreDelAutor={"J. K. Rowling"}/>
                        <SeleccionDeAutores elAutorExiste={true} direccion={"gabriel_garcia_marquez"} NombreDelAutor={"Gabriel García Márquez"}/>
                        <SeleccionDeAutores elAutorExiste={true} direccion={"miguel_de_cervantes"} NombreDelAutor={"Miguel De Cervantes"}/>
                        <SeleccionDeAutores elAutorExiste={true} direccion={"stephen_king"} NombreDelAutor={"Stephen King"}/>
                        <SeleccionDeAutores elAutorExiste={true} direccion={"edgar_allan_poe"} NombreDelAutor={"Edgar Allan Poe"}/>
                        <SeleccionDeAutores elAutorExiste={true} direccion={"oscar_wilde"} NombreDelAutor={"Oscar Wilde"}/>
                        <SeleccionDeAutores elAutorExiste={true} direccion={"national_learning_corporation"} NombreDelAutor={"National Learning Corporation"}/>
                        <SeleccionDeAutores elAutorExiste={true} direccion={"william_shakespeare"} NombreDelAutor={"William Shakespeare"}/>
                        <SeleccionDeAutores elAutorExiste={true} direccion={"garcia_santiago"} NombreDelAutor={"Garcia Santiago"}/>                        
                </ul>
        </body>        
    )
}