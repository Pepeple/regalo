import Image from "next/image";
import styles from "./perritos.module.css";

export default function Perritos()
{
    return(
        <div className={styles.container}>
        <div className={styles.imageContainer}>
            <Image
            src="/ruffo1.jpeg" 
            alt="Cinthia"
            width={200}
            height={200}
            />
            </div>
            <Image
            src="/ruffo2.jpeg" 
            alt="Cinthia"
            width={200}
            height={200}
            className="rounded-full mx-auto mt-8" 
            />
            <Image
            src="/ruffo3.jpeg" 
            alt="Cinthia"
            width={200}
            height={200}
            className="rounded-full mx-auto mt-8" 
            />
            <Image
            src="/ruffo4.jpeg" 
            alt="Cinthia"
            width={200}
            height={200}
            />
            <Image
            src="/cinthia.jpg"
            alt="Cinthia"
            width={200}
            height={200}
            className="rounded-full mx-auto mt-8" 
            />
        </div>


        





    )




}