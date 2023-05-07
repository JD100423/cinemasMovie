import React from "react"
import {  Box, MenuItem, TextField } from "@mui/material"
const ListCategories = (props) => {
    return(
        <Box component="form"
        sx={{
            '& .MuiTextField-root': { m: 1, width: '25ch', margin: '0' },
          }}
          noValidate
          autoComplete="off"
        >
        <TextField
        id="outlined-select-currency"
        select 
        label="Categorias"
        heplperText="Seleccione una categoria">
            {props.categorias.map((categoria, index) => <MenuItem key={index.value} value={categoria}>{categoria}</MenuItem>)}
        </TextField>
        </Box>
    )
}

export default ListCategories