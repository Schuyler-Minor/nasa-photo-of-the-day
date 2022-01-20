import React from "react";
import styled from "styled-components";

const StyledHeader = styled.header`
    background-color: #3B0086;
    padding: 20px 0;

 
`
const Nav = styled.nav`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 40px;
`
const Logo = styled.img`

`
const Button = styled.button`
    border-radius: 50 px;
    border: none;
    box-shadow: 0 0 10px rgba(0, 0, 0.15);
    cursor: pointer;
    font-size: 16px;
    font-weight: 700;
    padding: 15px 60px;
    background-color: ${pr => pr.theme.tertiaryColor};
    color: ${pr => pr.theme.white};

    &:hover {
        opacity: 0.9;
        transform: scale(0.98);
    }
`

const Header = () => {
    return (
        <StyledHeader>
            <Nav>
                <Logo src='https://www.nasa.gov/sites/default/files/thumbnails/image/edu_what_is_nasa_emblem.jpg' alt="NASA logo" />
                <Button>Learn More!!!</Button>
            </Nav>
            

        </StyledHeader>
    )
};

export default Header;