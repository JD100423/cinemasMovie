import React from "react";
import "./video.css";
import { AiOutlineArrowDown, AiOutlineDelete } from "react-icons/ai";
    

const Video = ( props) => {
        const { datos, colorPrimario, eliminarVideo, cambiarMostrar, mostrarDescription } = props;
        const { titulo, foto, video, id, description } =datos;
        

    return(
        <>
        <div className="videos-card">
            <div className="videos" style={{backgroundColor: colorPrimario}}>
                <AiOutlineDelete onClick={() => eliminarVideo(id)} className="eliminar"/>
             <img src={foto} alt={titulo}/>
            </div>
            <div className="info">
            <h4 className="title" style={{Color: colorPrimario}}>{titulo}</h4>
            <h5>
                <AiOutlineArrowDown onClick={() => cambiarMostrar(id)} className="mostrar">
                { mostrarDescription[id] ? 'Ocultar' : 'Mostrar'}
                </AiOutlineArrowDown>
            </h5>
            {mostrarDescription[id] && description}
            <a className="BtnVer" style={{backgroundColor: colorPrimario}} href={video}>Ver</a>
            </div>
        </div>
        </>
    )
}

export default Video;