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

  const [videos, setVideo] = useState(getVideosFromLocalStorage(
    {
      id: uuid(),
      titulo: "",
      video: "",
      foto: "",
      categoria: "",
      description: "",
      codigo: ""
    }
  ));

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
    const videosconID = {...video, id: uuid()}
    const updatedVideos =   [...videos, videosconID];
    setVideo(updatedVideos);
    localStorage.setItem('videos', JSON.stringify(updatedVideos));
  };

  const eliminarVideo = (id) => {
    console.log("Eliminar: ", id);
    const nuevosVideos = videos.filter((video) => video.id !==id)
    setVideo(nuevosVideos);
  };

  


  return (
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path='/' element={<Home videos={videos} eliminarVideo={eliminarVideo}/>} />
        <Route path='/formulario' element={<Formulario categorias={categorias}  agregarVideo={agregarVideo}/>} />
        <Route path='/post/:id' element={<Post />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
