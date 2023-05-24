import React, { useState} from "react";
import "./video.css"
import styled from "styled-components";
import { AiOutlineArrowDown, AiOutlineDelete } from "react-icons/ai"
    

const Video = ( props) => {
        const { datos, colorPrimario, eliminarVideo } = props;
        const { titulo, descripcion, foto, video, id} =datos;
        console.log("Datos: ", datos);
    const BtnCard = styled.a `
        text-align: center;
        margin: 40px 3px 20px;
        background-color: ${colorPrimario};
        display: block;
        border-radius: 13px;
        font-family: 'Source Sans Pro', 'Roboto';
        font-size: 20px;
        font-weight: 400;
        border: none;
        padding: 22px 24px;
        width: 200px;
        color: whitesmoke;
        text-decoration: none;
        `
        const Titulo = styled.h4 `
            color: ${colorPrimario};
            font-size: 20px;
            line-height: 22px;
            margin-bottom: 12px;
            margin-left: 1.5rem ;
        `
      
    const [mostrarDescription, cambiarDescription] = useState(false)
        const cambiarMostrarV = () => {
        cambiarDescription(!mostrarDescription)
        }

    return(
        <>
        <div className="videos-card">
            <div className="videos" style={{backgroundColor: colorPrimario}}>
                <AiOutlineDelete onClick={() => eliminarVideo(id)} className="eliminar"/>
             <img src={foto} alt={titulo}/>
            </div>
            <div className="info">
            <Titulo>{titulo}</Titulo>
            <h5>
                <AiOutlineArrowDown onClick={cambiarMostrarV} className="mostrar">
                { mostrarDescription ? 'Ocultar' : 'mostrar'}
                </AiOutlineArrowDown>
            </h5>
            {mostrarDescription && (descripcion)}
            <BtnCard href={video}>Ver</BtnCard>
            </div>
        </div>
        </>
    )
}

export default Video