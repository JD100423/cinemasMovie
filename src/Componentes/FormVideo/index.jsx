import React, {useState} from "react";
import { useNavigate } from "react-router-dom";
import ListCategories from "../ListaCategories";
import Texto from "../Texto";
import { Box} from "@mui/material";
import BtnReset from "../BtnReset";
import TextDescription from "../Textdescription";
import Titulo from "../Texto/Titulo";
import Btn from "../BtnForm";

const Formulario = (props) => {
    const [titulo, setTitulo] = useState("")
    const [foto, setImagen] = useState("")
    const [video, setVideo] = useState("")
    const [categoria, setCategoria] = useState("")
    const [description, setDescription] = useState("")
    const [codigo, setCodigo] = useState("")
    const [enfoque, setEnfoque] = useState({
        titulo: false,
        video: false,
        foto: false,
        categoria: false,
        description: false,
        codigo: false,
    });

    const {agregarVideo} = props

    const navigate = useNavigate();

    const resetForm = () => {
        setTitulo("")
        setVideo("")
        setImagen("")
        setCategoria("")
        setDescription("")
        setCodigo("")
        setEnfoque({
            titulo: true,
            video:false,
            foto: false,
            categoria: false,
            description: false,
            codigo: false,
        })
    };
    
    const ValidateURL = (url) => {
        try {
            new URL(url);
            return true;
        } catch(error) {
            return false;
        }
    };

    const activarBlur = (campo) => {
        setEnfoque((prevEnfoque) => ({
            ...prevEnfoque,[campo]:true,
        }));
    };
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
        console.log(datosAEnviar);
        agregarVideo(datosAEnviar)
        resetForm();
        navigate('/');

    };

    const validarCampo = (campo) => {
        if (campo.trim() === "") {
            return false;
        } else{

            return true;
        }
    }

    const NewCat = () => {
        navigate('/formulariocat')
    }

    return (
        <>
        <Titulo titulo="Nuevo Video"/>
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
        error={(enfoque.titulo && titulo.trim() === "") ||
                (enfoque.titulo && titulo.length < 2)}
        helperText={
            enfoque.titulo && !validarCampo(titulo) ? "Debe llenar este campo." : 
            enfoque.titulo && titulo.length < 2 ? "El campo debe almenos 2 carácteres." : "" 
        }
        valor={titulo}
        actualizarValor={setTitulo}
        onBlur={() => activarBlur("titulo")}
        />
        <Texto 
        titulo="Video"
        placeholder="Ingresar link del video"
        required
        error={(enfoque.video && video.trim() === "") ||
        (enfoque.video && ValidateURL(video) !== true)}
        valor={video}
        actualizarValor={setVideo}
        helperText={
            enfoque.video && video.trim() === "" ? "Debe llenar este campo." : 
            enfoque.video && ValidateURL(video) !== true ? "Ingrese una url válida." : ""
        }
        onBlur={() => activarBlur("video")}
        type="url"
        />
        <Texto 
        titulo="foto"
        placeholder="Ingresar link de la foto"
        required
        valor={foto}
        actualizarValor={setImagen}
        error={(enfoque.foto && foto.trim() === "") ||
            (enfoque.foto && ValidateURL(foto) !== true)}
        helperText={
            enfoque.foto && foto.trim() === "" ? "Debe llenar este campo." : 
            enfoque.foto && ValidateURL(foto) !== true ? "Ingrese una url válida." : ""
        }
        onBlur={() => activarBlur("foto")}
        type="url"
        />
        <ListCategories 
        valor={categoria}
        placeholder="Selecciona una categoría"
        categorias={props.categorias}
        required
        setCategoria={setCategoria}
        error={(enfoque.categoria && categoria.trim() === "") || 
                (enfoque.categoria && categoria.length < 1)}
        helperText={
            enfoque.categoria && categoria.trim() === "" ? "Este campo es obligatorio.":
            enfoque.categoria && categoria.length < 1 ? "Debe seleccionar al menos 1 categoria." : ""
        }
        onBlur={() => activarBlur("categoria")}
        />
        <TextDescription 
        titulo="Descripcion"
        placeholder="Ingresa la descripcion"
        required
        valor={description}
        actualizarValor={setDescription}
        error={(enfoque.description && description.trim() === "") || 
                (enfoque.description && description.length < 10)}
        helperText={
            enfoque.description && description.trim() === "" ? "Debe llenar este campo." :
            enfoque.description && description.length < 10 ? "El campo debe tener al menos 10 carácteres." : ""
        }
        onBlur={() => activarBlur("description")}
        />
        <Texto 
        titulo="Codigo"
        placeholder="Ingresar codigo de acceso"
        valor={codigo}
        actualizarValor={setCodigo}
        required
        type="password"
        error={(enfoque.codigo && codigo.trim() === "") || 
            (enfoque.codigo && codigo.length < 2)}
        helperText={
            enfoque.codigo && codigo.trim() === "" ? "El código es obligatorio." :
            enfoque.codigo && codigo.length < 2 ? "El campo debe tener al menos 2 números." : ""
        }
        onBlur={() => activarBlur("codigo")}
        />
        <Btn texto="Guardar" type="submit"/>
        <BtnReset text="Limpiar" onClick={resetForm}/>
        <Btn texto="Nueva categoria"  onClick={NewCat}/>
        </Box>
        </>

    )
}

export default Formulario