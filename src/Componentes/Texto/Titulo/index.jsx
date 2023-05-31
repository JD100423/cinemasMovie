import React from "react";
import styled from "styled-components";

const Title = styled.h1`
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    line-height: 70px;
    text-align: center;
    font-size: 60px;
`

const Titulo = (props) => {
    return (
        <Title>{props.titulo}</Title>
    )
}

export default Titulo