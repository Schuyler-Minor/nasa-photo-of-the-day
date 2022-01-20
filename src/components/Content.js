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

const Content = (props) => {
    return (
        <StyledContent>
            <h1>Nasa Picture of the Day!</h1>
            <p>{props.data.date}</p>
            <p>{props.data.title}</p>
            <img src={props.data.url} alt="Nasa Picture of the day" />
            <p>{props.data.explanation}</p>


        </StyledContent>
    )
}

export default Content;