import Image from "next/image";
import styles from "../perritos.module.css";

export default function Perritos()
{
    return(
        <div>
        <div className={styles.containertomy}>
                <Image
                src="/tomy1.jpeg" 
                alt="Tomy"
                width={500}
                height={500}
                layout="intrinsic"
                
                className={styles.customimage}
                />
                
                <Image
                src="/tomy2.jpeg" 
                alt="Tomy"
                width={500}
                height={500}
                layout="intrinsic"
                className={styles.customimage}
                />
                <Image
                src="/tomy3.jpeg" 
                alt="Tomy"
                width={500}
                height={500}
                layout="intrinsic"
                
                className={styles.customimage}
                />
                
        </div>
        <div className={styles.fondo}> <h1>Quien mejor que ellos para hacerte feliz?</h1>Alguna vez me contaste que a este muchacho lo trajo tu hermana, pero seguro tambien te ha hecho muy feliz ^^ </div>
        </div>
    )




}