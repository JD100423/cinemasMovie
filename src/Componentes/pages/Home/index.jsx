import React, { useCallback } from "react";
import { Container } from "@mui/material";
import MostrarVideo from "../../MostrarVideo";
import ListPost from "../../listPost";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const BtnCell = styled.button`
    display: none;

    @media (max-width: 500px) {
      display: block;
      width: 100%;
      text-align: center;
      background-color: #2A7AE4;
      padding: 24px 32px;
      font-family: 'Source Sans Pro', sans-serif;
      font-weight: 600;
      font-size: 20px;
      line-height: 22px;
      color: #ffffff;
    }
  `;

  const navigate = useNavigate();

  const handleClick = useCallback(() => {
    navigate("/formulario");
  }, [navigate]);

  return (
    <Container>
      <MostrarVideo />
      <BtnCell onClick={handleClick}>Agregar nueva Pelicula</BtnCell>
      <ListPost url={"post"} />
    </Container>
  );
};

export default Home;
