import React, { useCallback } from "react";
import { Container } from "@mui/material";
import MostrarVideo from "../../MostrarVideo";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { colorSecundario } from "../../UI/variables";
import Footer from "../../Footer";

  const BtnCell = styled.button`
    display: none;

    @media (max-width: 500px) {
      display: block;
      width: 100%;
      text-align: center;
      background-color: ${colorSecundario};
      padding: 24px 32px;
      font-family: 'Source Sans Pro', sans-serif;
      font-weight: 600;
      font-size: 20px;
      line-height: 22px;
      color: #ffffff;
    }
  `;
  const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;
const ContentContainer = styled.div`
  flex: 1;
`;
  
const Home = (props) => {

  const {videos, eliminarVideo, cambiarMostrar, mostrarDescription, categorias} = props

  console.log("Videos en Home: ", videos)
  console.log("Categorias en Home: ", categorias)
  

  const navigate = useNavigate();

  const handleClick = useCallback(() => {
    navigate("/formulario");
  }, [navigate]);


  return (
    <HomeContainer>
    <ContentContainer>
    <Container>
      <MostrarVideo 
      videos={videos} 
      categorias={categorias}
      eliminarVideo={eliminarVideo} 
      cambiarMostrar={cambiarMostrar} 
      mostrarDescription={mostrarDescription}
      />
      <BtnCell onClick={handleClick}>Agregar nueva Pelicula</BtnCell>
    </Container>
    </ContentContainer>
    <Footer />
    </HomeContainer>
  );
};

export default Home;
