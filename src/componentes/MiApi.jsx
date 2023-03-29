import React, { useState } from 'react';
import axios from 'axios';

function MiApi() {
  const [buscarPelicula, setBuscarPelicula] = useState('');
  const [peliculas, setPeliculas] = useState([]);

  const laApi = async () => {
    const response = await axios.get(`http://www.omdbapi.com/?apikey=ee9b4eb4&s=${buscarPelicula}`);

    // Ordenar las películas por año de estreno (de menor a mayor)
    const ordenarPeliculas = response.data.Search.sort((a, b) => {
      return parseInt(b.Year) - parseInt(a.Year)  ;
    });

    setPeliculas(ordenarPeliculas);
  };
  

  return (
    <div className="container">
      <div className="buscador">
        <input type="text"
        placeholder="Nombre de la pelicula,serie,juego"
        value={buscarPelicula}
        class="form-control border-light"
        onChange={(e) => setBuscarPelicula(e.target.value)} 
        />
        <button type="button" class="btn btn-outline-light" onClick={laApi}>Search</button>
      </div>
      <div className="cartelera">
        <ul>
          {peliculas.map((movie) => (
            <li className="pelicula" key={movie.imdbID}>
              <span>Nombre:</span>{movie.Title}
              <br />
              <span>Tipo:</span>{movie.Type} <img src={movie.Poster} alt={movie.Title} />
              <br />
              <span>Año de estreno:</span>{movie.Year}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default MiApi;