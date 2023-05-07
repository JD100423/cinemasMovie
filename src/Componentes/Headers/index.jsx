import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import logo from "../../assets/img/logo.png"
import { colorSecundario } from "../UI/variables";
import Btn from "../Btn/Btn";
import Formularios from "../Formularios";

const Nav = styled.nav`
background-color:${colorSecundario} ;
display: flex;
justify-content: space-between;
padding: 0 15vh;
width: auto;
height: 94px;
`

const Logo = styled.img`
    width: 146.9px;
    height: 40px;
    margin-top: 25px;
`

const Header = () => {
    return (
     <Nav>
        <Logo src={logo} alt="Logo" />
        <div>
        <Btn>Agregar Nueva Pelicula</Btn>
        </div>
     </Nav>
    )
 }

 export default Header
 