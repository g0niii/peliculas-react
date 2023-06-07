import {Listado} from './Componentes/listado.js';
import { Buscador } from './Componentes/buscador.js';
import { Agregarpeli } from './Componentes/agregar.js';
import { useState } from 'react';



function App() {
    const [listadoState, setListadoState] = useState([]);
  return (
    <div className="layout">
        {/*Cabecera*/}
        <header className="header">
            <div className="logo">
                <div className="play"></div>
            </div>
            
            <h1>Mis Peliculas</h1>
        </header>

        {/*Barra de navegación*/}
        <nav className="nav">
            <ul>
                <li><a href="#">Inicio</a></li>
                <li><a href="#">Peliculas</a></li>
                <li><a href="#">Blog</a></li>
                <li><a href="#">Contacto</a></li>
            </ul>
        </nav>

        {/*Contenido principal*/}
        <section id="content" className="content">

            {/*aqui van las peliculas*/}
            <Listado listadoState={listadoState} setListadoState={setListadoState}/>
           

        </section>

        {/*Barra lateral*/}
        <aside className="lateral">
            <Buscador/>

            <Agregarpeli setListadoState={setListadoState} />
        </aside>

        {/*Pie de página*/}
        <footer className="footer">
            &copy; Lista de Peliculas g0ni 
        </footer>

    </div>
  );
}

export default App;
