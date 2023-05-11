import React, {useState} from "react";
import ListCategories from "../ListaCategories";
import Texto from "../Texto";
import { Button} from "@mui/material";
import styled from "styled-components";

const Formulario = (props) => {
    const [titulo, setTitulo] = useState("")
    const [imagen, setImagen] = useState("")
    const [video, setVideo] = useState("")
    const [categoria, setCategoria] = useState("")
    const [description, setDescription] = useState("")
    const [codigo, setCodigo] = useState("")
    const {agregarPelicula} = props
    
    
    const resetBoton = (e) => {
        e.preventDefault()
        let datosAEnviar = {
            titulo,
            imagen,
            video,
            categoria,
            description,
            codigo
        }
        agregarPelicula(datosAEnviar)
    }

        const Formulario = styled.section`
            display: flex;
            justify-content: space-evenly;
            margin: 80px 50px;
            flex-wrap: wrap;
            gap: 20px;
        `
        const Form = styled.form`
        border-radius: 20px;
        padding: 8px 100px;
        flex: 1;
        `
    return (
        <Formulario>
            <Form onSubmit={resetBoton}>
        <Texto 
        titulo="Titulo"
        placeholder="Ingresar titulo"
        required
        valor={titulo}
        type="text"
        actualizarValor={setTitulo}
        />
        <Texto 
        titulo="Video"
        placeholder="Ingresar link del video"
        required
        valor={video}
        actualizarValor={setVideo}
        />
        <Texto 
        titulo="Imagen"
        placeholder="Ingresar link de la imagen"
        required
        valor={imagen}
        actualizarValor={setImagen}
        />
        <Texto 
        titulo="Descripcion"
        placeholder="Ingresa la descripcion"
        required
        valor={description}
        actualizarValor={setDescription}
        />
        <Texto 
        titulo="Codigo"
        placeholder="Ingresar codigo de acceso"
        required
        valor={codigo}
        actualizarValor={setCodigo}
        />
        <ListCategories 
        valor={categoria}
        actualizarCat={setCategoria}
        categorias={props.categorias}
        />
        <Button variant="contained" style={{marginTop: "5px"}}>Registrar</Button>
        </Form>
        </Formulario>
    )
}

export default Formulario