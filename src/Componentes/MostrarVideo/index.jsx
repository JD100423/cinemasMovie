import React, { useState } from "react";
import { v4 as uuid } from 'uuid';
import Categorias from "../Categorias";

const MostrarVideo = (props) => {
  const {videos, setVideos} = props
  console.log("mostrar: ", props);

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

  const ActCategoria = (id, titulo) => {
    setCategorias((prevCategorias) =>
      prevCategorias.map((categoria) =>
        categoria.id === id ? { ...categoria, titulo: titulo } : categoria
      )
    );
  };

  const agregarNuevo = (nuevoVideo) => {
    const videoConId = { ...nuevoVideo, id: uuid() };
    setVideos((prevVideos) => [...prevVideos, videoConId]);
    console.log(agregarNuevo);
  };

  console.log("Lista de videos en Mostrar:", videos);


  return (
    <>
      {categorias.map((categoria) => (  
        <Categorias
          datos={categoria}
          key={categoria.id}
          valor={categoria.titulo}
          setCategorias={(nuevoTitulo) => ActCategoria(categoria.id, nuevoTitulo)}
          videos={videos.filter((video) => video.categoria.toLowerCase() === categoria.titulo.toLowerCase())}
          agregarNuevo={agregarNuevo}
        />
      ))}
    </>
  );
  
};

export default MostrarVideo;
