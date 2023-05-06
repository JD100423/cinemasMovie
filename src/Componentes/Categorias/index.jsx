import Video from "../Video"
import "./Categorias.css"
import React from "react"

const Categorias = (props) => {
    const {colorPrimario , nombre} = props.datos
    const { videos }  = props

    return <>
    {
        <section>
            <div className="video">
                {
                    videos.map((video,index) => <Video
                    datos={video}
                    key={index}
                    colorPrimario={colorPrimario}
                    nombre={nombre}
                    />
                    )
                }

            </div>
        </section>}
    </>
}

export default Categorias

