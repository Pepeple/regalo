import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
        <div
          className="flex items-center justify-center min-h-screen"
          style={{ backgroundColor: "#885555" }} // Fondo rosa pastel
        >
    
          <main className="text-center">
          <div className="animate-pulse">
            <Image
            src="/cinthia.jpeg" // Ruta de la imagen
            alt="Cinthia"
            width={200}
            height={200}
            className="rounded-full mx-auto mt-8" // Estilos para la imagen
            />
            </div>
            <h1
              className="text-6xl font-bold text-white" // Texto grande y blanco
              style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.2)" }} // Sombra suave
            >
              Te quiero mucho Cinthia
            </h1>
          </main>
        </div>
      );
    }
  

