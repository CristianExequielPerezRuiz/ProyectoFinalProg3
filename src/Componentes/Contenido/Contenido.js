import Card from 'react-bootstrap/Card';
import { Button } from 'react-bootstrap';
import './Contenido.css'
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

export default function Contenido(){
    const [color,setColor]=useState("white")
    const handleMouseOver=(id)=>{
        switch(id){
            case 1: setColor("red"); break;
            case 2: setColor("lightblue"); break;
            case 3: setColor("firebrick"); break;
            case 4: setColor("lightsalmon"); break;
            case 5: setColor("fuchsia"); break;
            case 6: setColor("yellow"); break;
            default: setColor("#912");
        } 
    }
    const handleMouseOut=()=>{
        setColor("white")
    }

    useEffect(()=>{
        if(color === "red" || color === "white"){
            document.querySelector('.titulo_cardNumero1').style.color=color;
            document.querySelector('.descr_cardNumero1').style.color=color;
        }
        if(color === "lightblue" || color === "white"){
            document.querySelector('.titulo_cardNumero2').style.color=color;
            document.querySelector('.descr_cardNumero2').style.color=color;
        }
        if(color === "firebrick" || color === "white"){
            document.querySelector('.titulo_cardNumero3').style.color=color;
            document.querySelector('.descr_cardNumero3').style.color=color;
        }
        if(color === "lightsalmon" || color === "white"){
            document.querySelector('.titulo_cardNumero4').style.color=color;
            document.querySelector('.descr_cardNumero4').style.color=color;
        }
        if(color === "fuchsia" || color === "white"){
            document.querySelector('.titulo_cardNumero5').style.color=color;
            document.querySelector('.descr_cardNumero5').style.color=color;
        }
        if(color === "yellow" || color === "white"){
            document.querySelector('.titulo_cardNumero6').style.color=color;
            document.querySelector('.descr_cardNumero6').style.color=color;
        }
        
    },[color])

    function Libro ({TenemosElLibro, nombre}){
        return TenemosElLibro? <p>{nombre}</p>:null;
    }

    return(
        <>
            <div className='grid-layaut-contenido'>
                <div className= "cajaContenido cjcont1">
                    <Card  onMouseOver={() =>handleMouseOver(1)} onMouseOut={handleMouseOut} style={{ width: '18rem' }} className='cardss' >
                        <Card.Img variant="top" className='cardsImagen'  src="https://www.pasajeslibros.com/static/img/portadas/_visd_0001JPG0EHKJ.jpg" />
                        <Card.Body className='cardsBody'>
                            <Card.Title className='cardsRelleno titulo_cardNumero1' ><Libro TenemosElLibro={true} nombre={'Harry Potter'}/></Card.Title>
                            <Card.Text className='cardsRelleno descr_cardNumero1'  >
                                Magia, amistad, aventuras épicas, lecciones de vida, personajes inolvidables, lecciones de valentía y superación, un viaje inolvidable
                            </Card.Text>
                            <Link to="/harrypotter">
                                <Button variant="primary">Mas informacion</Button>
                            </Link>
                        </Card.Body>
                    </Card>
                </div>
                <div className= "cajaContenido cjcont2">
                    <Card  onMouseOver={() =>handleMouseOver(2)} onMouseOut={handleMouseOut} style={{ width: '18rem' }} className='cardss' >
                        <Card.Img variant="top" className='cardsImagen' src="https://images.cdn3.buscalibre.com/fit-in/360x360/a0/f7/a0f78bdb7f9ec86afdc102ab766caf37.jpg" />
                        <Card.Body className='cardsBody'>
                            <Card.Title className='cardsRelleno titulo_cardNumero2' ><Libro TenemosElLibro={true} nombre={'Donde Todo Brilla'}/></Card.Title>
                            <Card.Text className='cardsRelleno descr_cardNumero2' >
                                Una novela cautivadora que te sumerge en un mundo lleno de secretos, intrigas y pasiones desenfrenadas
                            </Card.Text>
                            <Link to="/donde_todo_brilla">
                                <Button variant="primary">Mas informacion</Button>
                            </Link>
                        </Card.Body>
                    </Card>
                </div>
                <div className= "cajaContenido cjcont3">
                    <Card  onMouseOver={() =>handleMouseOver(3)} onMouseOut={handleMouseOut} style={{ width: '18rem' }} className='cardss' >
                        <Card.Img variant="top" className='cardsImagen' src="https://images.cdn1.buscalibre.com/fit-in/360x360/24/e9/24e94a2bf598461343415bd45a5e188b.jpg" />
                        <Card.Body className='cardsBody'>
                            <Card.Title className='cardsRelleno titulo_cardNumero3' ><Libro TenemosElLibro={true} nombre={'Berserk'}/></Card.Title>
                            <Card.Text className='cardsRelleno descr_cardNumero3' >
                                Prepárate para adentrarte en un mundo cruel donde los demonios y los humanos se entrelazan en una batalla épica por la supervivencia
                            </Card.Text>
                            <Link to="/berserk">
                                <Button variant="primary">Mas informacion</Button>
                            </Link>
                         </Card.Body>
                    </Card>
                </div>
                <div className= "cajaContenido cjcont3">
                    <Card onMouseOver={() =>handleMouseOver(4)} onMouseOut={handleMouseOut} style={{ width: '18rem' }} className='cardss' >
                        <Card.Img variant="top" className='cardsImagen' src="https://static.cegal.es/imagenes/marcadas/9788497/978849759245.gif" />
                        <Card.Body className='cardsBody'>
                            <Card.Title className='cardsRelleno titulo_cardNumero4' ><Libro TenemosElLibro={true} nombre={'El amor en los tiempos del colera'}/></Card.Title>
                            <Card.Text className='cardsRelleno descr_cardNumero4' >
                                Es una novela magistral que nos sumerge en un mundo de pasión, romance y emociones desbordantes.
                            </Card.Text>
                            <Link to="/elamorenlostiemposdecolera">
                                <Button variant="primary">Mas informacion</Button>
                            </Link>                        
                        </Card.Body>
                    </Card>
                </div> 
                <div className= "cajaContenido cjcont3">
                    <Card onMouseOver={() =>handleMouseOver(5)} onMouseOut={handleMouseOut} style={{ width: '18rem' }} className='cardss' >
                        <Card.Img variant="top" className='cardsImagen' src="https://3.bp.blogspot.com/-Fr1U2l_-w3c/Vi_MQEnetoI/AAAAAAAACnc/_I3pnCecEi4/s1600/noticia-de-un-secuestro.jpg" />
                        <Card.Body className='cardsBody'>
                            <Card.Title className='cardsRelleno titulo_cardNumero5' ><Libro TenemosElLibro={true} nombre={'Noticia de un secuestro'}/></Card.Title>
                            <Card.Text className='cardsRelleno descr_cardNumero5' >
                                En esta novela, el autor nos sumerge en una historia real y escalofriante basada en eventos reales ocurridos en Colombia.
                            </Card.Text>
                            <Link to="/noticiadeunsecuestro">
                                <Button variant="primary">Mas informacion</Button>
                            </Link>                        
                            </Card.Body>
                    </Card>
                </div> 
                <div className= "cajaContenido cjcont3">
                    <Card  onMouseOver={() =>handleMouseOver(6)} onMouseOut={handleMouseOut} style={{ width: '18rem' }} className='cardss' >
                        <Card.Img variant="top" className='cardsImagen' src="https://images.cdn1.buscalibre.com/fit-in/360x360/a6/18/a618be10eae5c2a608ec6e22e6917e29.jpg" />
                        <Card.Body className='cardsBody'>
                            <Card.Title className='cardsRelleno titulo_cardNumero6' ><Libro TenemosElLibro={true} nombre={'Don Quijote de la Mancha'}/></Card.Title>
                            <Card.Text className='cardsRelleno descr_cardNumero6' >
                                Es una novela que combina hábilmente la sátira, la parodia y la reflexión profunda sobre la condición humana
                            </Card.Text>
                            <Link to="/donquijote">
                                <Button variant="primary">Mas informacion</Button>
                            </Link>                        
                            </Card.Body>
                    </Card>
                </div>     
            </div>
        </>
    )
}