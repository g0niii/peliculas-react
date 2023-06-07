import React, { useEffect } from 'react';

export const Listado = ({ listadoState, setListadoState }) => {
  useEffect(() => {
    console.log("Componente del listado de películas cargado...");
    conseguirPeliculas();
  }, []);

  const conseguirPeliculas = () => {
    let peliculas = JSON.parse(localStorage.getItem("pelis"));
    setListadoState(peliculas);
    return peliculas;
  };

  const borrarPeli = (id)=> {
    //conseguir peliculas almacenadas
    let pelisAlmacenadas = conseguirPeliculas();

    //filtrar esas peliculas para que elimine del array la que no quiero
    
    let nuevoListado = pelisAlmacenadas.filter(peli => peli.id !== parseInt(id));

    //actualizar estado del listado
    setListadoState(nuevoListado);

    //actualizar los datos en localStorage

    localStorage.setItem('pelis', JSON.stringify(nuevoListado))
  }

  return (
    <>
      {listadoState && listadoState.length !== 0 ? (
        listadoState.map((peli) => (
          <article key={peli.id} className="peli-item">
            <h3 className="title">{peli.titulo}</h3>
            <p className="description">{peli.descripcion}</p>
            <button className="edit">Editar</button>
            <button className="delete" onClick={()=>borrarPeli(peli.id)}>Borrar</button>
          </article>
        ))
      ) : (
        <h2>No hay peliculas agregadas </h2>
      )}
    </>
  );
};
