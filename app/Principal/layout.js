
import "../globals.css";
import Link from "next/link";

export default function RootLayout({ children }) {
  return <>
    
      <header className="header">
        <div className="container">
          <h1>Hola Como estas?</h1>
          <nav>
            <ul className="nav-links">
                <li>
                <Link href="/Principal" >
                    inicio
                </Link>
                </li>
                <li>
                <Link href="/Principal/Escritos" >
                    Escritos
                </Link>
                </li>
                <li>
                <Link href="/Principal/Dibujos">
                    Dibujos
                </Link>
                </li>
                <li>
                <Link href="/Principal/Perritos">
                    Perritos
                </Link>
                </li>
            </ul>
          </nav>
        </div>
      </header>

      <main className="main-content">
        {children}
      </main>

      <footer className="footer">
        <div className="container">
          <p>&copy; 2023 Mi Proyecto Next.js. Todos los derechos reservados.</p>
        </div>
      </footer>
    </>
  ;
}