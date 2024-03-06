/* 
Crear una aplicación React que permita al usuario subir una imagen y mostrarla en pantalla.
*/
// Importar las librerías de React 
import React from 'react';
// Importar ReactDOM
import ReactDOM from 'react-dom';
// Importar el componente UploadImage
import UploadImage from './Components/UploadImage';

import './App.css'

const App = () => {
  return (
    <div>
      <h1>    App para subir imágenes </h1>
      <UploadImage />
    </div>
  );
};

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);