import React, {} from "react";
import styled from "styled-components";
import { colorSecundario } from "../UI/variables";





const Btn = ({Formularios}) => {
    const Btn = styled.button`
    text-align: center;
    background-color: ${colorSecundario};
    display: flex;
    border-radius: 3px;
    padding: 10px 20px;
    margin-top: 25px;
    font-weight: 600;
    border: 2px solid white;
    color: whitesmoke;
    text-decoration: none;
    cursor: pointer;
    @media (max-width: 500px){
        display: none;
        
    }
`

    const Letter = styled.a`
        text-align: center;
        color: #ffffff;
        font-family: 'Source Sans Pro';
        
    `


    return (
       
        <Btn>
            <Letter href="../Formularios/index.jsx">Agregar Nuevo Video</Letter>
        </Btn>
    )
}

export default Btn