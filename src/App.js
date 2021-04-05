import React, { useState, useEffect } from "react";
import axios from 'axios';
import "./App.css";

function App() {
  const [nasa, setNasa] = useState({});
  useEffect(() => {
    axios.get("https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY")
      .then(res => {
        console.log(res.data);
        setNasa(res.data);

      })
      .catch(err => {

      })

  }, [])


  return (
    <div className="App">
      <img src={nasa.url} />
      <p>
        {nasa.explanation}
      </p>
    </div>
  );
}

export default App;
