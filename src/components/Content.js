import React, { useState, useEffect } from "react";
import axios from "axios";

const Content = () => {
    const [ nasaData, setNasaData] = useState([])

    useEffect(() => {
        axios.get(`https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY`)
          .then(res => {
            console.log(res.data);
            setNasaData(res.data)
          }).catch(err => console.error(err))
      }, [])

    return (
        <div>
            <p>THERE WILL BE TONS OF CONTENT HERE <br/>
                LIKE VERY SOON<br/>
                SUPER SOON
            </p>
        </div>
    )
}

export default Content;