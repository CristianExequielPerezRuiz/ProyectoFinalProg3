import axios from "axios";
import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import './Axios.css'

const baseURL = "https://jsonplaceholder.typicode.com/posts"

export default function Axios(){
    const [post, setPost] = React.useState(null);

    React.useEffect(()=>{
        axios.get(`${baseURL}/1`).then((response)=>{
            setPost(response.data);
        })
    },[]);  

    function createPost() {
        axios
        .post(baseURL, {
            title: "Titulo Hola",
            body: "This is a new post."
        })
        .then((response) => {
            setPost(response.data);
        });
    }

    function deletePost(){
        axios
        .delete(`${baseURL}/1`)
        .then(()=>{
            alert("Post Eliminado");
            setPost("https://jsonplaceholder.typicode.com/posts/1")
        })
    }

    function updatePost(){
        axios
        .put(`${baseURL}/1`,{
            title : "Titulo Modificado",
            body: "This is a modific post."
        })
        .then((response)=>{
            setPost(response.data);
        });
    }

    //------------------------------
        function handleClick (click){
            axios.get(`${baseURL}/${click}`).then((response)=>{
                setPost(response.data);
                setClick (click+1)
                console.log(click)
            })
        }       

    const [click, setClick] = useState(2)
    //--------------------------------

    function RegenerarPost (click){
        axios.get(`${baseURL}/${click-1}`).then((response)=>{
            setPost(response.data);
            console.log(click)
        })
    }  

    //-------------------------------
    
    
    if (!post) return "No post!"
    else{
        return(
            <>
                <div className="relleno bd_ax">
                    <h1 className="relleno h1_axios"> {post.title}</h1>
                    <p className="relleno p_axios">{post.body}</p>
                    <Button variant="success" className="btn_axios" onClick={createPost}>Create Post</Button >                    
                    <Button variant="primary" className="btn_axios" onClick={()=>handleClick(click)}>Siguiente Post</Button >
                    <Button variant="dark" className="btn_axios" onClick={deletePost}>Eliminar Post</Button>
                    <Button variant="warning" className="btn_axios" onClick={()=>RegenerarPost(click)}>Regenerar Post</Button >   
                    <Button variant="info" className="btn_axios" onClick={updatePost}>Actualizar Post</Button >  
                    <Link to="/paginaprincipallibreria">
                            <Button className="btn_volver_axios btn_axios" variant="danger">
                                Volver
                            </Button>
                    </Link>
                </div>
            </>            
        )
    }
}