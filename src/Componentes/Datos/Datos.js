import { useEffect, useState } from "react";
import './Datos.css'

export default function Datos(){
    const [password,setPassword]=useState('');
    const [usuario,setUsuario]=useState('');
    const [apellido,setApellido]=useState('');
    const [domicilio,setDomicilio]=useState('');

    const UsuLocalStor = localStorage.getItem('emailRegistrado');
    const PassLocalStor = localStorage.getItem('passwordRegistrado');
    const ApeLocalStor = localStorage.getItem('apellidoRegistrado');
    const DomiciLocalStor = localStorage.getItem('domicilioRegistrado');

    const handleSubmit =(e)=>{
        e.preventDefault();
        localStorage.setItem('emailRegistrado',usuario);
        localStorage.setItem('passwordRegistrado',password);
        localStorage.setItem('apellidoRegistrado',apellido);
        localStorage.setItem('domicilioRegistrado',domicilio);
    }

    useEffect(()=>{
        setPassword(PassLocalStor)
        setUsuario(UsuLocalStor)
        setDomicilio(DomiciLocalStor)
        setApellido(ApeLocalStor) 
    },[])
    return(
        <>  
            <h1 className="misdatos_titulo">MIS DATOS</h1>
            <form className="formDatos" onSubmit={handleSubmit}>
                <div>
                    <input className="controls"
                    type="text"
                    placeholder="Usuario"
                    value={usuario}
                    onChange={(ev)=>{
                        setUsuario(ev.target.value)
                    }}/>
                </div>
                <div> 
                    <input className="controls"
                    type="text"
                    placeholder="Contraseña"
                    value={password}
                    onChange={(ev)=>{ 
                        setPassword(ev.target.value)
                    }}/>
                </div>
                <div>
                    <input className="controls"
                    type="text"
                    placeholder="Apellido"
                    value={apellido}
                    onChange={(ev)=>{
                        setApellido(ev.target.value)
                    }}/>
                </div> 
                <div>
                    <input className="controls"
                    type="text"
                    placeholder="Domiciliodatos"
                    value={domicilio}
                    onChange={(ev)=>{
                        setDomicilio(ev.target.value)
                    }}/>
                </div>
            
                <button className="btnGuardar" type="submit">Guardar</button>

            </form>
            
        </>
    )
}