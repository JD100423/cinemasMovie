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
  
const Home = ({videos, eliminarVideo, cambiarMostrar, mostrarDescription}) => {

  const navigate = useNavigate();

  const handleClick = useCallback(() => {
    navigate("/formulario");
  }, [navigate]);


  return (
    <Container>
      <MostrarVideo 
      videos={videos} 
      eliminarVideo={eliminarVideo} 
      cambiarMostrar={cambiarMostrar} 
      mostrarDescription={mostrarDescription}
      />
      <BtnCell onClick={handleClick}>Agregar nueva Pelicula</BtnCell>
    </Container>
  );
};

export default Home;
