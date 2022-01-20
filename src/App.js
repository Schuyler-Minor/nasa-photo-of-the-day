import React, { useEffect } from "react";
import "./App.css";
import Header from "./components/Header";
import Content from "./components/Content";
import Footer from "./components/Footer";
import axios from "axios";

function App() {

 

  return (
    <div className="App">
      <Header />

      <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun <span role="img" aria-label='go!'>🚀</span>!
      </p>
      <Content/>
      <Footer />
    
    </div>
  );
}

export default App;
