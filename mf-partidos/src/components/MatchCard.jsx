import React from 'react';
import Partido from './partido';
import './MisApuestas.css';

const MisApuestas = () => {
  const partidos = [
    { id: 1, nombre: 'Real Madrid vs FC Barcelona', tipoApuesta: 'Ganador local', multiplicador: 1.5 },
    { id: 2, nombre: 'Liverpool vs Manchester City', tipoApuesta: 'Ganador visitante', multiplicador: 2.0 },
    { id: 3, nombre: 'Juventus vs Inter de Milán', tipoApuesta: 'Empate', multiplicador: 3.0 },
    { id: 4, nombre: 'Bayern Múnich vs Borussia Dortmund', tipoApuesta: 'Ganador local', multiplicador: 1.8 },
    { id: 5, nombre: 'Paris Saint-Germain vs Olympique de Marsella', tipoApuesta: 'Ganador visitante', multiplicador: 2.2 },
    { id: 6, nombre: 'Chelsea vs Arsenal', tipoApuesta: 'Empate', multiplicador: 3.5 },
    { id: 7, nombre: 'Real Sociedad vs Athletic Club', tipoApuesta: 'Ganador local', multiplicador: 1.6 },
    { id: 8, nombre: 'AC Milan vs AS Roma', tipoApuesta: 'Ganador visitante', multiplicador: 2.1 },
    { id: 9, nombre: 'Atlético de Madrid vs Sevilla', tipoApuesta: 'Empate', multiplicador: 3.2 },
  ];

  return (
    <div className="mis-apuestas">
      <div className="partidos-grid">
        {partidos.map(partido => (
          <Partido
            key={partido.id}
            partido={partido.nombre}
            tipoApuesta={partido.tipoApuesta}
            multiplicador={partido.multiplicador}
          />
        ))}
      </div>
      <footer className="footer">
        <p>© 2024 Apuestas Online. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
};
  export default MisApuestas;