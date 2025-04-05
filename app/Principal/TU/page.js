"use client"
import { useEffect, useRef } from 'react';
import styles from "./tu.module.css";

export default function TU()
{
  const squareRef = useRef(null);

  useEffect(() => {
    const square = squareRef.current;
    if (!square) return;

    const avoidMouse = (e) => {
      const mouseX = e.clientX;
      const mouseY = e.clientY;

      const squareRect = square.getBoundingClientRect();
      const squareX = squareRect.left + squareRect.width / 2;
      const squareY = squareRect.top + squareRect.height / 2;

      // Calcula la distancia entre el mouse y el cuadrado
      const distanceX = mouseX - squareX;
      const distanceY = mouseY - squareY;
      const distance = Math.sqrt(distanceX * distanceX + distanceY * distanceY);

      // Si el mouse está muy cerca, mueve el cuadrado en dirección opuesta
      const minDistance = 100; // Distancia mínima para empezar a esquivar
      if (distance < minDistance) {
        const moveDistance = minDistance - distance;
        const angle = Math.atan2(distanceY, distanceX);

        // Nueva posición (alejándose del mouse)
        const randomFactor = Math.random() * 20 - 10; // Entre -10 y 10
        const newX = squareX - Math.cos(angle) * (moveDistance + randomFactor);
        const newY = squareY - Math.sin(angle) * (moveDistance + randomFactor);

        // Aplica la nueva posición
        square.style.left = `${newX - squareRect.width / 2}px`;
        square.style.top = `${newY - squareRect.height / 2}px`;
      }
    };

    window.addEventListener('mousemove', avoidMouse);

    return () => {
      window.removeEventListener('mousemove', avoidMouse);
    };
  }, []);

  return (
    <div >
    <h1 className={styles.titulo}>Asi de dificil es atraparte</h1>
    


    <div className={styles.square} ref={squareRef}>
      CINTHIA
    </div>
    </div>
  );
}
