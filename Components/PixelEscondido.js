// components/PixelEscondido.js
import { useEffect, useState } from 'react';

export default function PixelEscondido({ id }) {
  const [encontrado, setEncontrado] = useState(false);

  // Cargar estado inicial desde localStorage
  useEffect(() => {
    const progreso = JSON.parse(localStorage.getItem('pixelesEncontrados')) || {};
    if (progreso[id]) {
      setEncontrado(true);
    }
  }, [id]);

  const handleClick = () => {
    if (!encontrado) {
      // Actualizar estado local
      setEncontrado(true);
      
      // Guardar en localStorage
      const progreso = JSON.parse(localStorage.getItem('pixelesEncontrados')) || {};
      progreso[id] = true;
      localStorage.setItem('pixelesEncontrados', JSON.stringify(progreso));
    }
  };

  return (
    <span 
      onClick={handleClick}
      style={{
        width: '10px',
        height: '10px',
        backgroundColor: 'red' ,
        position: 'relative',
        cursor: 'pointer',
        display: 'inline-block'
      }}
    >
      {encontrado && (
        <span style={{
          position: 'absolute',
          top: '-6px',
          left: '-6px',
          width: '16px',
          height: '16px',
          border: '2px solid green',
          borderRadius: '2px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '10px'
        }}>✓</span>
      )}
    </span>
  );
}