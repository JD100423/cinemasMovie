import React from "react";
import { colorPrimario } from "../UI/variables";
import styled from "styled-components";

const Boton = styled.button`
    background-color: ${colorPrimario};
    font-family: 'Source Sans Pro', sans-serif;
    font-size: 15px;
    color: #fff;
    padding: 15px;
    display: flex;
    border-radius: 3px;
    border: none;
    @media (max-width: 500px){
        margin-top: 15px;
    }
`
const Btn = (props) => {
    return(
        <>
        <Boton type={props.type} onClick={props.onClick}>{props.texto}</Boton>
        </>

    )
    
}

export default Btn;