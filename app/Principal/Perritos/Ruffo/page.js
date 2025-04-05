"use client"
import Image from "next/image";
import styles from "../perritos.module.css";

import PixelEscondido from '../../../../Components/PixelEscondido';

export default function Perritos()
{
    return(
        <div>
        <div className={styles.containerrufo}>
                
                <Image
                src="/ruffoycinthia2.jpeg" 
                alt="Ruffo"
                width={500}
                height={500}
                layout="intrinsic"
                className={styles.customimage}
                />

                <Image
                src="/ruffo2.jpeg" 
                alt="Ruffo"
                width={500}
                height={500}
                layout="intrinsic"
                className={styles.customimage}
                />
                
                <Image
                src="/ruffo3.jpeg" 
                alt="Ruffo"
                width={500}
                height={500}
                layout="intrinsic"
                className={styles.customimage}
                />
                
                <Image
                src="/ruffo1.jpeg" 
                alt="Ruffo"
                width={500}
                height={500}
                layout="intrinsic"
                className={styles.customimage}
                />
                <Image
                src="/ruffo4.jpeg" 
                alt="Ruffo"
                width={500}
                height={500}
                layout="intrinsic"
                className={styles.customimage}
                />
                <Image
                src="/ruffoycinthia4.jpeg" 
                alt="Ruffo"
                width={500}
                height={500}
                layout="intrinsic"
                className={styles.customimage}
                />
                <Image
                src="/ruffoycinthia.jpeg" 
                alt="Ruffo"
                width={500}
                height={500}
                layout="intrinsic"
                className={styles.customimage}
                />
        </div>
        <div className={styles.fondo}> <h1>Quien mejor que ellos para hacerte feliz?</h1> Se lo mucho que quieres a tus perritos cinthia, estas son unas galerias
                                    donde puedes ver fotos de ellos, esta es la seccion de Ruffo mira nomas que fotos tan bonitas(mi favorita es donde tiene la misma chaqueta jajaj que cute)<PixelEscondido id="Perritos-1" /></div>
        </div>
    )




}