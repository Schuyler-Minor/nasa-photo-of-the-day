import React from "react";


const Content = (props) => {
    return (
        <div>
            <h1>Nasa Picture of the Day!</h1>
            <p>{props.data.date}</p>
            <p>{props.data.title}</p>
            <img src={props.data.url} alt="Nasa Picture of the day" />
            <p>{props.data.explanation}</p>


        </div>
    )
}

export default Content;