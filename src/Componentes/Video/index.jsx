import React from "react";
import styled from "styled-components";
import "./video.css"


const Video = (props) => {
    const {titulo, descripcion, foto, video, categoria, id, codigo} = props.datos
    return(
        <div className="videos-card">
            <div className="video">
             <img src={foto} alt={titulo}/>
            </div>
            <div className="info">
            <h4>{titulo}</h4>
            <h5>{descripcion}</h5>
            </div>
        </div>
    )
}

export default Video