  import React from "react";
  import Video from "../Video";
  import "./Categorias.css";

  const Categorias = ( props ) => {
    const { colorPrimario, nombre } = props.datos;
    const { videos, agregarNuevo, eliminarVideo, cambiarMostrar, mostrarDescription } = props;

    console.log("videos en Categorias: ", videos);
  const Estilotitulo = {
    border: `3px solid ${colorPrimario}`,
    borderRadius: "10px",
    padding: "20px",
    textAlign: "center",
    boxShadow: "2px 3px 5px rgba(0, 0, 0, 0.09)"

  }
    const handleAgregarNuevo = (nuevoVideo) => {
      agregarNuevo(nuevoVideo);
    };

    return (
      <>
      {
      <section>
        <h3 style={Estilotitulo}>{nombre}</h3>
          <div className="video">
            {videos.map((video, index) => (
              <Video
                datos={video}
                key={index}
                colorPrimario={colorPrimario}
                videos={videos}
                nombre={nombre}
                agregarNuevo={handleAgregarNuevo}
                eliminarVideo={eliminarVideo}
                cambiarMostrar={cambiarMostrar}
                mostrarDescription={mostrarDescription}
              />
            ))}
          </div>
      </section>
      }
      </>
    );
  };

  export default Categorias;
