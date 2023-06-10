import React, { useCallback } from "react";
import { Container } from "@mui/material";
import MostrarVideo from "../../MostrarVideo";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { colorSecundario } from "../../UI/variables";

  const BtnCell = styled.button`
    display: none;

    @media (max-width: 500px) {
      display: block;
      width: 90%;
      text-align: center;
      background-color: ${colorSecundario};
      padding: 24px 32px;
      font-family: 'Source Sans Pro', sans-serif;
      font-weight: 600;
      font-size: 20px;
      line-height: 22px;
      color: #ffffff;
      border: none;
      border-radius: 10px;
    }
  `;
  const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  @media (max-width: 500px) {
    align-items: center;
  }
`;
const ContentContainer = styled.div`
  flex: 1;
`;
  
const Home = (props) => {

  const {videos, eliminarVideo, cambiarMostrar, mostrarDescription, categorias} = props

  

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
    </Container>
    </ContentContainer>
      <BtnCell onClick={handleClick}>Agregar nueva Pelicula</BtnCell>
    </HomeContainer>
  );
};

export default Home;
