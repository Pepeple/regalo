import Image from "next/image";
import styles from "./pageprincipal.module.css";


export default function Principal() {
  
  return (
    <div className={styles.divbig}>
      {/* Sección 1 */}
      <section className={styles.section1}>
        <div className={styles.container}>
          <h1>Sección 1</h1>
          <p>Esta es la primera sección de nuestro sitio web.</p>
          <a href="#section2" className={styles.ctaButton}>Ir a Sección 2</a>
        </div>
      </section>

      {/* Sección 2 */}
      <section id="section2" className={styles.section2}>
        <div className={styles.container}>
          <h2>Sección 2</h2>
          <p>
            Esta es la segunda sección. Aquí puedes agregar más detalles sobre tu
            proyecto o empresa.
          </p>
        </div>
      </section>

      {/* Sección 3 */}
      <section className={styles.section3}>
        <div className={styles.container}>
          <h2>Sección 3</h2>
          <div className={styles.grid}>
            <div className={styles.card}>
              <h3>Característica 1</h3>
              <p>Descripción breve de la característica 1.</p>
            </div>
            <div className={styles.card}>
              <h3>Característica 2</h3>
              <p>Descripción breve de la característica 2.</p>
            </div>
            <div className={styles.card}>
              <h3>Característica 3</h3>
              <p>Descripción breve de la característica 3.</p>
            </div>
          </div>
        </div>
      </section>

    </div>
  );

}
  
