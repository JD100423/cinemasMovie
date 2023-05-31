import { Box } from "@mui/material";
import React, {useState} from "react";
import Texto from "../Texto";
import TextDescription from "../Textdescription";
import Btn from "../BtnForm";
import BtnReset from "../BtnReset";
import InputColor from "../InputColor";
import Titulo from "../Texto/Titulo";
import { useNavigate } from "react-router-dom";


const FormCat = (props) => {
    const [nombre, setNombre] = useState("");
    const [descriptionCat, setDescriptionCat] = useState("");
    const [color, setColor] = useState("");
    const [codigo, setCodigo] = useState("");
    const {crearCategoria} = props

    const navigate = useNavigate();

    const resetForm = () => {
        setNombre("")
        setDescriptionCat("")
        setColor("")
        setCodigo("")
    }

    const manejarNuevaCategoria = (e) => {
        e.preventDefault();
        crearCategoria({nombre, colorPrimario: color})
        navigate('/formulario')
    }

    return (
        <>
        <Titulo titulo="Nueva Categoria"/>
        <Box component="form"
        autoComplete="off"
        sx={{
            display: "flex",
            justifyContent: "space-evenly",
            margin: "80px 50px",
            flexWrap: "wrap"
        }}
        onSubmit={manejarNuevaCategoria}
        >
            <Texto 
            titulo="Nombre"
            placeholder="Ingrese el Nombre"
            required
            valor={nombre}
            actualizarValor={setNombre}
            />
            <TextDescription 
            titulo="Description"
            placeholder="Ingrese la descripcion"
            required
            valor={descriptionCat}
            actualizarValor={setDescriptionCat}
            />
            <InputColor 
            titulo="Color"
            valor={color}
            actualizarValor={setColor}
            type="color"
            />
            <Texto 
            titulo="Codigo"
            placeholder="Ingrese el codigo"
            required
            valor={codigo}
            actualizarValor={setCodigo}
            />
            <Btn texto="Guardar" type="submit"/>
            <BtnReset text="Limpiar" resetForm={resetForm}/>
        </Box>

        </>
    )
}

export default FormCat;