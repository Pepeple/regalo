"use client"
import "../globals.css";
import Link from "next/link";
import { useState} from 'react';

export default function RootLayout({ children }) {
  const [isOpen, setIsOpen] = useState(false);

  return <>
    
      <header className="header" id="inicio">
        <div className="container">
          <nav>
            <ul className="nav-links">
                <li>
                <Link href="/Principal" >
                    inicio
                </Link>
                </li>
                <li>
                <Link href="/Principal/Escritos" >
                    Escrito
                </Link>
                </li>
                <li>
                <Link href="/Principal/Dibujos">
                    Dibujo
                </Link>
                </li>
                <li>
                <Link href="/Principal/Minijuego">
                    Minijuego
                </Link>
                </li>
                <li>
                <Link href="/Principal/TU">
                    Aqui estas tu
                </Link>
                </li>
                <li>
                <button onClick={() => setIsOpen(!isOpen)}>▾Perritos</button>
                    {isOpen && (
                    <div className='menu-desplegable'>
                        <Link href="/Principal/Perritos/Ruffo">⬝ Rufo</Link>
                        <Link href="/Principal/Perritos/Tomy">⬝ Tomy</Link>
                        <Link href="/Principal/Perritos/Venus">⬝ Venus</Link>

                        </div>)
                    }
                
                </li>
            </ul>
          </nav>
        </div>
      </header>

      <main className="main-content">
        {children}
      </main>

    
    </>
  ;
  /*<footer className="footer">
        <div className="container">
          <p>&copy; 2023 Mi Proyecto Next.js. Todos los derechos reservados.</p>
        </div>
      </footer>*/
}