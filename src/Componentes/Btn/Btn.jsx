import React, {useState} from "react";
import styled from "styled-components";
import { colorSecundario } from "../UI/variables";
import { Link, } from "react-router-dom";
import Formulario from "../FormVideo";




const Btn = ({handleClick}) => {

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




    return (
        <>
       
       <Btn onClick={handleClick}>Agregar Nueva Pelicula</Btn>
        </>
    )
}


export default Btn