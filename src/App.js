import React, { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './Componentes/Headers';
import Formulario from './Componentes/FormVideo';
import Home from './Componentes/pages/Home';
import Post from './Componentes/pages/post';
import { v4 as uuid } from 'uuid';

function App() {

  const getVideosFromLocalStorage = () => {
    const storedVideos = localStorage.getItem('videos');
    if(storedVideos) {
      return JSON.parse(storedVideos);
    } 
    return [];
  };

  const [videos, setVideo] = useState(getVideosFromLocalStorage());

  const [categorias] = useState([
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

  const agregarVideo = (video) => {
    const updatedVideos =   [...videos, video];
    setVideo(updatedVideos);
    localStorage.setItem('videos', JSON.stringify(updatedVideos));
  };

  return (
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path='/' element={<Home videos={videos}/>} />
        <Route path='/formulario' element={<Formulario categorias={categorias}  agregarVideo={agregarVideo}/>} />
        <Route path='/post/:id' element={<Post />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
