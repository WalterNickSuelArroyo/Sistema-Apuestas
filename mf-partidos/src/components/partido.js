// Partido.js
import React, { useState } from 'react';
import './partido.css'; // Archivo de estilos CSS

const Partido = ({ partido, tipoApuesta, multiplicador, onApostar }) => {
  const [seleccion, setSeleccion] = useState(null);

  const handleSeleccion = (opcion) => {
    setSeleccion(opcion);
  };

  return (
    <div className="partido-card">
      <h3>{partido}</h3>
      <p>Tipo de apuesta: {tipoApuesta}</p>
      <p>Multiplicador: {multiplicador}</p>
      <div className="opciones">
        <div
          className={`opcion ${seleccion === 'local' ? 'seleccionado' : ''}`}
          onClick={() => handleSeleccion('local')}
        >
          Local
        </div>
        <div
          className={`opcion ${seleccion === 'empate' ? 'seleccionado' : ''}`}
          onClick={() => handleSeleccion('empate')}
        >
          Empate
        </div>
        <div
          className={`opcion ${seleccion === 'visitante' ? 'seleccionado' : ''}`}
          onClick={() => handleSeleccion('visitante')}
        >
          Visitante
        </div>
      </div>
      <button onClick={onApostar} disabled={!seleccion}>Apostar</button>
    </div>
  );
};

export default Partido;
