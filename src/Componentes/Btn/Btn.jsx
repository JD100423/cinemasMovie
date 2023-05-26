import React from "react";
import styled from "styled-components";
import { colorSecundario } from "../UI/variables";



const BtnAdd = styled.button`
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


const Btn = ({handleClick}) => {

    return (
        <>
            <BtnAdd onClick={handleClick}>Agregar Nueva Pelicula</BtnAdd>
        </>
    )
}


export default Btn