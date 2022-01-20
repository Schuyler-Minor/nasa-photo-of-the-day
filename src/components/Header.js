import React from "react";
import styled from "styled-components";

const StyledHeader = styled.header`
    background-color: #3B0086;
    padding: 40px 0;
 
`

const Header = () => {
    return (
        <StyledHeader>
            <img alt="NASA logo" src='https://www.nasa.gov/sites/default/files/thumbnails/image/edu_what_is_nasa_emblem.jpg' />

        </StyledHeader>
    )
};

export default Header;