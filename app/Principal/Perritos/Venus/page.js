"use client"
import Image from "next/image";
import styles from "../perritos.module.css";

import PixelEscondido from '../../../../Components/PixelEscondido';
export default function Perritos()
{
    return(
        <div >
        <div className={styles.containervenus}>
                <Image
                src="/venus1.jpeg" 
                alt="Venus"
                width={500}
                height={500}
                layout="intrinsic"
                
                className={styles.customimage}
                />
                <Image
                src="/venusycinthia.jpeg" 
                alt="Venus"
                width={500}
                height={500}
                layout="intrinsic"
                
                className={styles.customimage}
                />
        </div>
        <div className={styles.fondo}> <h1>Quien mejor que ellos para hacerte feliz?</h1> Es la nueva integrante, recien llegada a la cinthia-manada <PixelEscondido id="Perritos-2" />(por cierto que bonito nombre le pusiste)</div>

        </div>
    )




}