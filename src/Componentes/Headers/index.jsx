import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import styled from "styled-components";
import logo from "../../assets/img/logo.png"
import { colorSecundario } from "../UI/variables";
import Btn from "../Btn/Btn";



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
    const navegate = useNavigate();
    const location = useLocation(); 

    const handleClick = () => {
        navegate("/formulario")
    };

    const isHome = location.pathname === '/';
    return (
     <Nav>
        <Logo src={logo} alt="Logo" />
        { isHome && (
            <div>
            <Btn handleClick={handleClick}/>
        </div>
        )}
     </Nav>
    )
 }

 export default Header
 