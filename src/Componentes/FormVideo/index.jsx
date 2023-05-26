import React, {useState} from "react";
import { useNavigate } from "react-router-dom";
import ListCategories from "../ListaCategories";
import Texto from "../Texto";
import { Button, Box} from "@mui/material";
import TextDescription from "../Textdescription";

const Formulario = (props) => {
    const [titulo, setTitulo] = useState("")
    const [foto, setImagen] = useState("")
    const [video, setVideo] = useState("")
    const [categoria, setCategoria] = useState("")
    const [description, setDescription] = useState("")
    const [codigo, setCodigo] = useState("")
    const {agregarVideo} = props
    
    const navigate = useNavigate();
    
    const resetBoton = (e) => {
        e.preventDefault();

        let datosAEnviar = {
            titulo,
            foto,
            video,
            categoria,
            description,
            codigo
        }
        agregarVideo(datosAEnviar)
        console.log(datosAEnviar);
        navigate('/')

    };

    return (
        <Box component="form"
        autoComplete="off"  
        sx={{
            display: "flex",
            justifyContent: "space-evenly",
            margin: "80px 50px",
            flexWrap: "wrap"
        }}
        onSubmit={resetBoton}
        >
        <Texto 
        titulo="Titulo"
        placeholder="Ingresar titulo"
        required
        valor={titulo}
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
        titulo="foto"
        placeholder="Ingresar link de la foto"
        required
        valor={foto}
        actualizarValor={setImagen}
        />
        <ListCategories 
        valor={categoria}
        placeholder="Selecciona una categoría"
        categorias={props.categorias}
        setCategoria={setCategoria}
        />
        <TextDescription 
        titulo="Descripcion"
        placeholder="Ingresa la descripcion"
        required
        valor={description}
        actualizarValor={setDescription}
        />
        <Texto 
        titulo="Codigo"
        placeholder="Ingresar codigo de acceso"
        valor={codigo}
        actualizarValor={setCodigo}
        type="password"
        />
        <Button variant="contained" style={{marginTop: "5px"}} type="submit">Registrar</Button>
        </Box>
        

    )
}

export default Formulario