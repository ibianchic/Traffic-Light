import './App.css';
import React, { useState } from 'react';

function App() {
  const [brillo, setBrillo] = useState();

  const handleClick = (event) => {
    const clickedElement = event.target;
    if (brillo) {
      const prevElement = document.getElementById(brillo);
      if (prevElement) {
        prevElement.style.boxShadow = 'none';
      }
    }
    clickedElement.style.boxShadow = '0 0 10px 5px #fbfd72';
    setBrillo(clickedElement.id);
  };

  return (
    <div className="semaforo">
      <div id="rojo" className="rojo" onClick={handleClick}></div>
      <div id="amarillo" className="amarillo" onClick={handleClick}></div>
      <div id="verde" className="verde" onClick={handleClick}></div>
    </div>
  );
}

export default App;