import React from "react";
import Logo from "../../assets/img/logo.png";
import Instagram from "../../assets/img/instagramLogo.png";
import Facebook from "../../assets/img/facebookLogo.png";
import GitHub from "../../assets/img/githubLogo.png";
import LinkedIn from "../../assets/img/linkedInLogo.png"
import styled from "styled-components";
import { colorSecundario } from "../UI/variables";


const FooterCamp = styled.footer`
    display: flex;
    flex-direction: column;
    padding: 10px 20px;
    background-color: ${colorSecundario};
    margin-top: 15px;
    align-items: center;
    width: auto;
    height: auto;
`

const FooterImg = styled.img`
    width: 170px;
    height: auto;
    margin-bottom: 10px;
`

const FooterTitle = styled.h2`
    color: whitesmoke;
    display: flex;
    margin: 0;
    
`
const FooterName = styled.h4`
    color: whitesmoke;
    margin: 0;
`
const Footerlink = styled.a`
    display: flex;
    justify-content: space-evenly;
`
const LinkImg = styled.img`
    width: 25px;
    height: 25px;
    margin-top: 10px;
    margin-right: 10px;
`
const DivImg = styled.div`
    display: flex;
    margin-top: 10px;
`

const Footer = () => {
    return (
        
        <FooterCamp>
            <FooterImg src={Logo}/>
            <FooterTitle>Desarrollado por:</FooterTitle>
            <FooterName>&copy;Bartolo del Rosario Marmolejos</FooterName>
            
            <DivImg>
            <Footerlink href="https://web.facebook.com/junior100901">
                <LinkImg src={Facebook}/>
                </Footerlink>
            <Footerlink href="https://www.instagram.com/del_rosario10/?hl=es">
                <LinkImg src={Instagram}/>
                </Footerlink>
            <Footerlink href="https://www.linkedin.com/in/bartolo-del-rosario-marmolejos/">
                <LinkImg src={LinkedIn} />
                </Footerlink>
            <Footerlink href="https://github.com/JD100423">
                <LinkImg src={GitHub} />
                </Footerlink>
                </DivImg>
        </FooterCamp>
    );
};

export default Footer;