import React from "react"; 
import MiApi from './componentes/MiApi.jsx';

function App() {
  return (
    <div className="thebigscreen">
      <nav className="navbar navbar-expand navbar-dark bg-dark">
        <div className="container-fluid">
        <h1 className="navbar-brand mb-0 h1">The Big Screen 🎥 </h1>
        </div>
      </nav>
      <div className="buscador">
      <h4>Buscador de peliculas y series</h4>
      <MiApi />
      </div>
    </div>
  );
}

export default App;
