"use client"
import styles from './dibujos.module.css';
import Image from 'next/image';

import PixelEscondido from '../../../Components/PixelEscondido';

export default function Dibujos()
{
    return(
        <div className={styles.container}>
            

            <div className={styles.explicacion}>
            <h1>Dibujo de Cinthia</h1>
            <p>Yo no se dibujar entonces fui poniendo pixel por pixel y tratando de agrupar los que fueran de un color muy similar sobre una foto tuya, le eche muchas ganas aunque
            creo que se nota que no tengo mucha practica en esto del arte vea y quiza haya una mejor forma de hacerlo, pero yo lo hice asi como ves?.
            En fin, espero te guste lo hice con mucho cariño y este es el resultado. </p>

            <PixelEscondido id="Dibujo-1" />
            </div>
            <Image
            src="/dibujoescaladocinthia.png" 
            alt="Escrito"
            width={1284}
            height={500}
            layout='intrinsic'
            className={styles.customimage}/>
            
            

            
        </div>


    )
}