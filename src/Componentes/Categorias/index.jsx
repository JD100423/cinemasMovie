import Video from "../Video";
import "./Categorias.css";
import React from "react";

const Categorias = (props) => {
  const { colorPrimario, titulo } = props.datos;
  const { videos } = props;


  return (
    <section>
      {videos.length > 0 && (
        <div className="video">
          {videos.map((video, index) => (
            <Video
              datos={video}
              key={index}
              colorPrimario={colorPrimario}
              nombre={titulo}
            />
          ))}
        </div>
      )}
    </section>
  );
};

export default Categorias;

  
