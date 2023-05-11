import React, {useState} from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './Componentes/Headers';
import styled from 'styled-components';
import Formulario from './Componentes/FormVideo';
import Home from './Componentes/pages/Home';
import Post from './Componentes/pages/post';
import MostrarVideo from './Componentes/MostrarVideo';
import { v4 as uuid } from 'uuid';

function App({handleClick}, props) {
  const [categorias, setCategorias] = useState([
    {
      id: uuid(),
      titulo: "Action",
      colorPrimario: "#2A7AE4",
    },
    {
      id: uuid(),
      titulo: "Comedy",
      colorPrimario: "#00C86F",
    },
    {
      id: uuid(),
      titulo: "Animation",
      colorPrimario: "#FF8C2A",
    },
    {
      id: uuid(),
      titulo: "Romance",
      colorPrimario: "#6BD1FF",
    },
  ]);

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


  return (
    <BrowserRouter>
      <Header/> 
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/formulario' element={<Formulario categorias={categorias} />} />
        <Route path='/post/:id' element={<Post/>} />
        <Route path='/mostrar-video' element={<MostrarVideo/>} />
      </Routes>
      <BtnCell onClick={handleClick} text="Agregar nueva Pelicula"/>
    </BrowserRouter>
  );
}

export default App;
