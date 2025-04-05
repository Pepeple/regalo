
import styles from "./escritos.module.css";

import Link from "next/link";

export default function Escritos()
{
    return(
        <div className={styles.carta}>
            <Link href="/Principal/Escritos/Hojas">
            <div className={styles.elemento}>
            
            <div className={styles.sobre}>
                <div className={styles.papel}>
                    <div className={styles.corazones}>
                        <div className={styles.corazon}> </div><div className={styles.corazon}> </div><div className={styles.corazon}> </div><div className={styles.corazon}> </div><div className={styles.corazon}> </div>
                    </div>
                    <div className={styles.abrir}>Para Cinthia</div>
                </div>
            </div>
            </div>
            <div className={styles.superior}>
            </div>
        </Link>
        </div>


    )
}