import React from "react";
import Categorias from "../Categorias";

const MostrarVideo = (props) => {
  const {videos, eliminarVideo, cambiarMostrar, mostrarDescription, crearCategoria, categorias, agregarNuevo} = props

  console.log("videos en mostrar: ", videos)
  console.log("categorias en mostrar: ", categorias)
  return (
    <>
      {categorias.map((categoria, index) => (  
        <Categorias
          datos={categoria}
          key={index}
          videos={videos.filter(video => video.categoria === categoria.nombre)}
          categorias={categorias}
          crearCategoria={crearCategoria}
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
