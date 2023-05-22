import React, { useState} from "react";
import "./video.css"
import styled from "styled-components";
import { AiOutlineArrowDown } from "react-icons/ai"



const Video = ( props) => {
        const { datos, colorPrimario } = props;
        const { titulo, descripcion, foto, categoria, video } = datos;
      
    const [mostrarDescription, cambiarDescription] = useState(false)

    const BtnTitulo = styled.button`
        background-color: ${colorPrimario};
        border-radius: 10px;
        font-weight: 400;
        font-family: 'Roboto', sans-serif;
        font-size: 18px;
        padding: 20px 32px;
        border: 5px solid ${colorPrimario};
        color: #ffffff;
        margin: 26px 0;
    `

    const Titulo = styled.h4 `
        color: ${colorPrimario};
        font-size: 20px;
        line-height: 22px;
        margin-bottom: 12px;
        margin-left: 1.5rem ;
    `

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
    const cambiarMostrarV = () => {
        cambiarDescription(!mostrarDescription)
    }


    return(
        <>
        <div className="videos-card">
            <div>
            <BtnTitulo >{categoria}</BtnTitulo>
            </div>
            <div className="videos" style={{backgroundColor: colorPrimario}}>
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