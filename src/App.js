import React, { useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './Componentes/Headers';
import Formulario from './Componentes/FormVideo';
import Home from './Componentes/pages/Home';
import Post from './Componentes/pages/post';
import FormCat from './Componentes/FormCat';
import { v4 as uuid } from 'uuid';
import Footer from './Componentes/Footer';

function App() {
  const [mostrarDescription, setMostrarDescription] = useState({});

  const getVideosFromsessionStorage = () => {
    const storedVideos = sessionStorage.getItem('videos');
    if (storedVideos) {
      return JSON.parse(storedVideos);
    }
    return [];
  };

  const getCategoriasFromsessionStorage = () => {
    const storedCategorias = sessionStorage.getItem('categorias');
    if (storedCategorias) {
      return JSON.parse(storedCategorias);
    }
    return [];
  };

  const [videos, setVideos] = useState(getVideosFromsessionStorage);
  const [categorias, setCategorias] = useState(getCategoriasFromsessionStorage([
    {
      id: uuid(),
      nombre: "Acción",
      description: "Acción",
      colorPrimario: "#000",
      codigo: "0000"
    }
  ]));

  useEffect(() => {
    sessionStorage.setItem('videos', JSON.stringify(videos));
  }, [videos]);

  useEffect(() => {
    sessionStorage.setItem('categorias', JSON.stringify(categorias));
  }, [categorias]);

  const agregarVideo = (video) => {
    const videoConID = { ...video, id: uuid(), description: video.description };
    const updatedVideos = [...videos, videoConID];
    const updatedMostrarDescripcion = { ...mostrarDescription, [videoConID.id]: false };

    setVideos(updatedVideos);
    setMostrarDescription(updatedMostrarDescripcion);
  };

  const eliminarVideo = (id) => {
    const nuevosVideos = videos.filter((video) => video.id !== id);
    setVideos(nuevosVideos);
  };

  const cambiarMostrar = (videoId) => {
    setMostrarDescription((prevState) => {
      const newState = {
        ...prevState,
        [videoId]: !prevState[videoId],
      };
      return newState;
    });
  };

  const crearCategoria = (categoria) => {
    const categoriaConID = { ...categoria, id: uuid() };
    const updatedCategorias = [...categorias, categoriaConID];

    setCategorias(updatedCategorias);
  };

  console.log("videos: ", videos);
  console.log("categorias: ", categorias);

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home
          videos={videos}
          categorias={categorias}
          eliminarVideo={eliminarVideo}
          cambiarMostrar={cambiarMostrar}
          mostrarDescription={mostrarDescription}
        />} />
        <Route path="/formulario" element={<Formulario
          categorias={categorias}
          agregarVideo={agregarVideo}
          crearCategoria={crearCategoria}
        />}
        />
        <Route path="/formulariocat" element={<FormCat
          crearCategoria={crearCategoria}
        />} />
        <Route path="/post/:id" element={<Post />} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;

