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
    const [enfoque, setEnfoque] = useState({
        nombre: false,
        color: false,
        description: false,
        codigo: false,
    });

    const {crearCategoria} = props

    const navigate = useNavigate();

    const resetForm = () => {
        setNombre("")
        setDescriptionCat("")
        setColor("")
        setCodigo("")
        setEnfoque({
            nombre: false,
            color: false,
            description: false,
            codigo: false,
        })
    }

    const manejarNuevaCategoria = (e) => {
        e.preventDefault();
        crearCategoria({nombre, colorPrimario: color})
        navigate('/formulario')
    }

    const validarCampo = (campo) => {
        if (campo.trim() === "") {
            return false;
        } else{

            return true;
        }
    }

    const activarBlur = (campo) => {
        setEnfoque((prevEnfoque) => ({
            ...prevEnfoque,[campo]:true,
        }));
    };

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
            error={(enfoque.nombre && nombre.trim() === "") || 
                (enfoque.nombre && nombre.length < 6)}
            helperText={enfoque.nombre && !validarCampo(nombre) ? "Debe completar este campo.":
                        enfoque.nombre && nombre.length < 6 ? "Debe ingresar al menos 6 carácteres." : ""}
            onBlur={() => activarBlur("nombre")}
            />
            <TextDescription 
            titulo="Description"
            placeholder="Ingrese la descripcion"
            required
            valor={descriptionCat}
            actualizarValor={setDescriptionCat}
            error={(enfoque.description && descriptionCat.trim() === "") || 
                (enfoque.description && descriptionCat.length < 10)}
            helperText={
                enfoque.description && !validarCampo(descriptionCat) ? "Debe completar este campo." :
                enfoque.description && descriptionCat.length < 10 ? "Debe inngresar al menos 10 carácteres." : "" 
            }
            onBlur={() => activarBlur("description")}
            />
            <InputColor 
            titulo="Color"
            valor={color}
            required
            placeholder="Ingrese el color en Hex."
            actualizarValor={setColor}
            type="color"
            error={(enfoque.color && color.trim() === "")}
            helperText={enfoque.color && !validarCampo(color) ? "Debe seleccionar un color en Hex." : ""}
            onBlur={() => activarBlur("color")}
            />
            <Texto 
            titulo="Codigo"
            placeholder="Ingrese el codigo."
            required
            valor={codigo}
            actualizarValor={setCodigo}
            type="password"
            error={(enfoque.codigo && codigo.trim() === "") || 
                (enfoque.codigo && codigo.length < 2)}
            helperText={
                enfoque.codigo && !validarCampo(codigo) ? "El código es obligatorio." : 
                enfoque.codigo && codigo.length < 2 ? "Debe ingresar al menos 2 números." : ""
            }
            onBlur={() => activarBlur("codigo")}
            />
            <Btn texto="Guardar" type="submit"/>
            <BtnReset text="Limpiar" onClick={resetForm}/>
        </Box>

        </>
    )
}

export default FormCat;