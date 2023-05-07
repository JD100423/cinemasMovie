import React, {useState} from "react";
import ListCategories from "../ListaCategories";
import Texto from "../Texto";
import { Box, Button } from "@mui/material";

const Formulario = (props) => {

    const [titulo, setTitulo] = useState("")
    const [imagen, setImagen] = useState("")
    const [video, setVideo] = useState("")
    const [categorias, setCategoria] = useState("")
    const [description, setDescription] = useState("")
    const [codigo, setCodigo] = useState("")

    const {agregarNuevoVideo} = props

    const resetBoton = (e) => {
        e.preventDefault()
        let datosAEnviar = {
            titulo,
            imagen,
            video,
            categorias,
            description,
            codigo
        }
        agregarNuevoVideo(datosAEnviar)
    }
    return (
        <Box component="form" onSubmit={resetBoton}>
        <Texto 
        variant="Outlined"
        label="Titulo"
        valor={titulo}
        actualizarValor={setTitulo}
        />
        <Texto 
        variant="Outlined"
        label="Link del video"
        valor={video}
        actualizarValor={setVideo}
        />
        <Texto 
        variant="Outlined"
        label="Link de la imagen"
        value={imagen}
        actualizarValor={setImagen}
        />
        <ListCategories 
        valor={categorias}
        actualizaCat={setCategoria}
        categorias={props.categorias}
        />
        
        <Texto 
        variant="Outlined"
        label="Escriba la descripcion"
        valor={description}
        actualizarValor={setDescription}
        />
        <Texto 
        label="Escriba el codigo de seguridad"
        valor={codigo}
        actualizarValor={setCodigo}
        />
        <Button variant="contained" style={{marginTop: "5px"}}>Registrar</Button>
        </Box>
    )
}

export default Formulario