import { Geist, Geist_Mono} from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Como estas?",
  description: "Esto es un regalo para Cinthie Edith",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
    <body>
      <header className="header">
        <div className="container">
          <h1>Hola Como estas?</h1>
          <nav>
            <ul className="nav-links">
              <li><a href="/">Inicio</a></li>
              <li><a href="/about">Acerca de</a></li>
              <li><a href="/services">Servicios</a></li>
              <li><a href="/contact">Contacto</a></li>
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
    </body>
  </html>
  );
}
