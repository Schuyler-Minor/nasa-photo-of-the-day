import React, { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Content from "./components/Content";
import Footer from "./components/Footer";
import axios from "axios";

function App() {

  const [ nasaData, setNasaData] = useState(null)

  useEffect(() => {
      axios.get(`https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY`)
        .then(res => {
          setNasaData(res.data);
          console.log(res.data)
        }).catch(err => console.error(err))
    }, [])
 

  return (
    <div className="App">
      <Header />
      { nasaData && <Content data={nasaData} /> }
     { nasaData && <Footer data={nasaData} />}
    
    </div>
  );
}

export default App;
