/* eslint-disable react/no-unescaped-entities */
"use client"

import Image from "next/image";
import styles from "./pageprincipal.module.css";
import PixelEscondido from '../../Components/PixelEscondido';

export default function Principal() {
  
  return (
    <div>
    <div className={styles.divbig}>
      {/* Sección 2 */}
      <section className={styles.section2}>
        <div className={styles.container}>
                <Image
                src="/Cinthia.jpeg" 
                alt="cinthia"
                width={500}
                height={500}
                layout="intrinsic"/>
        </div>
      </section>
      {/* Sección 1 */}
      <section className={styles.section1}>
        <div className={styles.container}>
          <h1>BIENVENIDA Cinthia Edith Vazquez Tolentino</h1>
          <p>¿Quien es cinthia?</p>
          <a href="#section4" className={styles.ctaButton}>DESCUBRELO</a>
        </div>
      </section>

      

      {/* Sección 3 */}
      <section className={styles.section3}>
        <div className={styles.container}>
          <h2>Explicacion</h2>
          <div className={styles.grid}>
            <div className={styles.card}>
              <h3>Que es esto?</h3>
              <p>Esto es tu regalo de compleaños, se que puede estar raro pero de verdad espero que te guste.</p>
            </div>
            <div className={styles.card}>
              <h3> Como esta hecho?</h3>
              <p>Hice uso un framework que se llama Next.js utiliza tegnologias como javascript, react,  html y css </p>
            </div>
            <div className={styles.card}>
              <h3>Tequieromucho </h3>
              <p>Solo quiero que sepas que te quiero mucho </p>
            </div>
          </div>
        </div>
      </section>

    </div>
    
    <section id="section4" className={styles.section4}>
        <div className={styles.div1}>
            <h2>Quien es Cinthia Edith Vazquez Tolentino?</h2>
            <p>Para el ciego es la luz, para el hambriento es el pan, para el enfermo es la cura, para el solitario es la compañía, para el triste es la alegría, para el prisionero 
            es la libertad, para el pobre es el tesoro, para el deudor es el perdón. Si Cinthia opina le doy la razón, si Cinthia habla la escucho, si Cinthia falla la apoyo,
            si cinthia tiene 1000 fans yo soy uno de ellos, si cinthia tiene 1 fan yo soy ese fan, si cinthia no tiene fans, es porque ya no estoy en este mundo.
            </p>
        </div>
        <div className={styles.div2}>
                <Image
                src="/supercinthia2.JPG" 
                alt="cinthia"
                width={500}
                height={500}
                layout="intrinsic"
                className={styles.imagecustom}/>
        </div>
        <div className={styles.div3}>En la siguiente imagen podemos ver a Cinthia recatando a una pobre niña de un horrible incendio. Esto acontecio en 1945 y el incendio fue 
                                    conocido como "la gran llama", apesar de que pudo haber miles de muertes muchas vidas fueron salvadas ese dia gracias a nuestra heroina.
        </div>

        <div className={styles.div4}>
                <Image
                src="/supercinthia.JPG" 
                alt="cinthia"
                width={500}
                height={500}
                layout="intrinsic"
                className={styles.imagecustom}/>
        </div>
        <div className={styles.div5}>A continuacion podemos ver a Cinthia Edith cumpliendo una vez mas con su labor social poniendo su propia vida en riesgo para deterner
                                    un tren apunto de caer por un acantilado, nuestra heroina subo que hacer uso de sus poderes aracnados y salvo un aproximado de 1100 vidas.
        </div>

        <div className={styles.div6}>
                <Image
                src="/supercinthia3.png"  
                alt="cinthia"
                width={500}
                height={500}
                layout="intrinsic"
                className={styles.imagecustom}/>
        </div>
        <div className={styles.div7}>No nos olvidemos que Cinthia fue la primera en pisar la luna, este evento fue transmitido por todo el mundo en 1969 y nacio la celebre frase
                                      "Un pequeño paso para Cinthia, Un gran paso para la humanidad".  <PixelEscondido id="Inicio-1" />

        </div>
    </section>
    
    <a href="#inicio" className={styles.volverarriba}>Volver Arriba ↑</a>
  </div>

  );

}
  
