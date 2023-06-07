import React, { useState } from 'react'
import { guardarEnLocalStorage } from '../Helpers/guardarEnLocalStorage';

export const Agregarpeli = ({ setListadoState }) => {
    const tituloComponente = "Añadir pelicula";
    const [peliState, setPeliState] = useState({
      titulo: "",
      descripcion: ""
    });
  
    const { titulo, descripcion } = peliState;
  
    const conseguirDatosForm = (e) => {
      e.preventDefault();
      // Conseguir datos del formulario
      let target = e.target;
      let tituloFormulario = target.titulo.value;
      let descripcion = target.descripcion.value;
      // Crear objeto de película a guardar
      let peli = {
        id: new Date().getTime(),
        titulo: tituloFormulario,
        descripcion 
      };
  
      // Guardar estado
      setPeliState(peli);
      // Actualizar estado
      setListadoState((elementos) => {
        return [...elementos, peli];
      });
  
      // Guardar en el almacenamiento local (localstorage)
      guardarEnLocalStorage("pelis", peli);
    };
  
    return (
      <div className="add">
        <h3 className="title">{tituloComponente}</h3>
        <strong>{titulo && descripcion && "Has creado la película: " + peliState.titulo}</strong>
  
        <form onSubmit={conseguirDatosForm}>
          <input type="text" id="titulo" name="titulo" placeholder="Titulo" />
          <textarea id="descripcion" name="descripcion" placeholder="Descripción"></textarea>
          <input type="submit" id="save" value="Guardar" />
        </form>
      </div>
    );
  };