import React from "react";
import Video from "../Video";
import "./Categorias.css";

const Categorias = (props) => {
  const { colorPrimario, titulo } = props.datos;
  const { videos, agregarNuevo } = props;



  const handleAgregarNuevo = (nuevoVideo) => {
    agregarNuevo(nuevoVideo);
  };

  return (
    <section>
        <div className="video">
          {videos.map((video, index) => (
            <Video
              datos={video}
              key={index}
              colorPrimario={colorPrimario}
              nombre={titulo}
              videos={videos}
              agregarNuevo={handleAgregarNuevo}
            />
          ))}
        </div>
    </section>
  );
};

export default Categorias;
