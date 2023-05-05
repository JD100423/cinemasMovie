import Video from "../Video"
import React from "react"

const Categorias = (props) => {
    const { videos }  = props

    return <>
    {
        <section>
            <div className="video">
                {
                    videos.map((video,index) => <Video
                    datos={video}
                    key={index}
                    />
                    )
                }

            </div>
        </section>}
    </>
}

export default Categorias

