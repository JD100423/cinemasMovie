import React, {useState} from "react";
import "./video.css"
import styled from "styled-components";
import { AiOutlineArrowDown } from "react-icons/ai"

const Video = (props) => {
    const {titulo, descripcion, foto, video} = props.datos
    const {colorPrimario, nombre} = props
    const [mostrarCategoria, setCategoria] = useState(false)

    const cambiarMostrar = () => {
        setCategoria(!mostrarCategoria)
    }

    const Btn = styled.button`
        background-color: ${colorPrimario};
        border-radius: 10px;
        font-weight: 400;
        font-family: 'Roboto', sans-serif;
        font-size: 18px;
        padding: 24px 26px;
        border: none;
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
    return(
        <>
        <div className="videos-card">
            <Btn>{nombre}</Btn>
            <div className="videos" style={{backgroundColor: colorPrimario}}>
             <img src={foto} alt={titulo}/>
            </div>
            <div className="info">
            <Titulo>{titulo}</Titulo>
            <h5>
                <AiOutlineArrowDown onClick={cambiarMostrar} className="mostrar">
                { mostrarCategoria ? 'Ocultar' : 'mostrar'}
                </AiOutlineArrowDown>
            </h5>
            {mostrarCategoria && (descripcion)}
            <BtnCard href={video}>Ver</BtnCard>
            </div>
        </div>
        </>
    )
}

export default Video