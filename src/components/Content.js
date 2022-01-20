import React from "react";
import styled from "styled-components";


const StyledContent = styled.div`
    
    background-color: #EEEEFF ;
    padding: 20px;
    border-bottom: 2px solid white;
    background-color: ${pr => pr.theme.secondaryColor};
    color: ${pr => pr.theme.white};

    p {
        text-align: center;
    }
 
`
const Flex = styled.div`
    display: flex;
    align-items: center;

    & > div,
    & > ul {
        flex: 1;
    }
`
const Image = styled.img`
    width: 500px;
    margin-left: 40px;
    border-radius: 0px;

    @media (max-width: ${({ theme }) => theme.mobile}) {
        margin: 40px 0 30px;
        width: 375px;
    }
    
`

const Content = (props) => {
    return (
        <StyledContent>
            <h1>Nasa Picture of the Day!</h1>
            <p>{props.data.date}</p>
            <p>{props.data.title}</p>
            <Image src={props.data.url} alt="Nasa Picture of the day" />
            <p>{props.data.explanation}</p>
        </StyledContent>
    )
}

export default Content;