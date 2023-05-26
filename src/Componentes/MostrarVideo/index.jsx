import React, { useState } from "react";
import { v4 as uuid } from 'uuid';
import Categorias from "../Categorias";

const MostrarVideo = (props) => {
  const {videos, setVideo, eliminarVideo, cambiarMostrar, mostrarDescription} = props


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

  const agregarNuevo = (videod) => {
    setVideo(...videos, videod)
  };
  return (
    <>
      {categorias.map((categoria) => (  
        <Categorias
          datos={categoria}
          key={categoria.titulo}
          videos={videos.filter(video => video.categoria === categoria.titulo)}
          agregarNuevo={agregarNuevo}
          eliminarVideo={eliminarVideo}
          cambiarMostrar={cambiarMostrar}
          mostrarDescription={mostrarDescription}

        />
      ))}
    </>
  );
  
};

export default MostrarVideo;
