import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import './Login.css'
import TituloLibreria from "../Titulo/TituloLibreria";

export default function Login(){

    const [logueado,SetLogueado]= useState(false)
    const [usuario,setUsuario]=useState('');
    const [password,setPassword]=useState('');

    const navigate = useNavigate();

    const handleSubmit=(e)=>{
        e.preventDefault();
        let UsuRegistStor = localStorage.getItem('emailRegistrado');
        let PassRegistStor = localStorage.getItem('passwordRegistrado');
        
        
        if (usuario===UsuRegistStor && password === PassRegistStor){
            SetLogueado (true)
        }
        else{
            alert("Contraseña Incorrecta")
            setUsuario("")
            setPassword("")
        }
        if (logueado){
            navigate('/paginaprincipallibreria')
        }
        
    }
    const tituloLog="Login"
    return (
      <>
        <body className="bodydellogin">
            <form className="frmInicio" onSubmit={handleSubmit}>
                <div>
                <h1 className="tituloLogin"><TituloLibreria titulo={tituloLog}/></h1>
                    <label id="username label">Nombre de usuario</label>
                    <input className="username"
                    type="text" 
                    placeholder="Ingrese su Usuario"
                    value={usuario}
                    onChange={(ev)=>{
                        setUsuario(ev.target.value)
                    }}/>
                </div>
                <div>
                    <label id="contrasena label">Contraseña</label> 
                    <input className="password"
                    type="password"
                    placeholder="Ingrese su Contraseña"
                    value={password}
                    onChange={(ev)=>{
                        setPassword(ev.target.value)
                    }}/>
                    
                    <button className="btnIngresar" type="submit">Iniciar sesion</button>
                    
                
                <Link to="/registro">
                    <button className="btnRegistrar" >Registrarse</button>
                </Link>
                </div> 
            </form>  
          </body>
      </>
    );
}