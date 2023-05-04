import React from "react";
import styled from "styled-components";
import logo from "../../assets/img/logo.png"
import { colorSecundario } from "../UI/variables";

const Nav = styled.nav`
background-color:${colorSecundario} ;
display: flex;
justify-content: space-between;
padding: 0 15vh;
width: 100;
height: 94px;
`

const Logo = styled.img`
    width: 146.9px;
    height: 40px;
    margin-top: 25px;
`

const BtnHeader = styled.a`
    text-align: center;
    display: flex;
    border-radius: 3px;
    padding: 10px 20px;
    margin-top: 25px;
    font-family: 'Source Sans Pro';
    font-weight: 600;
    border: 2px solid white;
    color: whitesmoke;
`

const Header = () => {
    return (
     <Nav>
        <Logo src={logo} alt="Logo" />
        <div>
            <BtnHeader href="#">Nuevo Video</BtnHeader>
        </div>
     </Nav>
    )
 }

 export default Header
 