import React from "react";
import styled from "styled-components";
import Card from "../Video";

const StyledContainer = styled.div`
    min-height: 100px;
    padding: 0 2.5rem;
`

const StyledContent = styled.section`
    display: flex;
    justify-content: space-between;
`

const Container = () => {
    return (
        <StyledContainer>
            <StyledContent>
                <Card />
            </StyledContent>
        </StyledContainer>
    )
}

export default Container