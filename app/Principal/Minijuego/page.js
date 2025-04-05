/* eslint-disable react/no-unescaped-entities */
"use client"
import { useEffect, useState } from 'react';
import styles from "./minijuego.module.css";


export default function Minijuego() {
  const [encontrados, setEncontrados] = useState(0);

  useEffect(() => {
    const actualizarContador = () => {
      const progreso = JSON.parse(localStorage.getItem('pixelesEncontrados')) || {};
      setEncontrados(Object.keys(progreso).length);
    };

    // Actualizar al cargar
    actualizarContador();
    
    // Escuchar cambios en otras pestañas
    window.addEventListener('storage', actualizarContador);
    
    return () => window.removeEventListener('storage', actualizarContador);
  }, []);

  return (

    <div className={styles.container}>
        <div className={styles.explicacion}>
            <h1>EXPLICACION</h1>
            Hola cinthia esto es un minijuego, te lo explico mira: 
            en las diferentes secciones de las pagina he colocado de manera discreta un pequeño pixel rojo " <span 
            style={{
            width: '10px',
            height: '10px',
            backgroundColor: 'red' ,
            position: 'relative',
            display: 'inline-block'}}></span> " lo unico que  tienes que hacer es dar click sobre el y veras que se coloca un borde verde junto con unas pequeña palomita, tambien 
            el contador a que ves a la izquierda aumentara, hay 5 puntos rojos en toda la pagina web por lo que deberas encontrarlos todos. Si logras entrarlos todos mandame captura o tomale foto, 
            la recompensa sera unos chetos y un elote como ves? 
        </div>
        <div className={styles.contador}>
            Píxeles: {encontrados}/5

        </div>

        
    </div>
  );
}