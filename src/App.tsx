import { useEffect } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import { Cabecera } from './componentes/Cabecera';
import { PieDePagina } from './componentes/PieDePagina';
import { Inicio } from './paginas/Inicio';
import { Seccion } from './paginas/Seccion';
import { Interrelacion } from './paginas/Interrelacion';
import { Fuentes } from './paginas/Fuentes';

/**
 * Lleva el foco al contenido principal tras navegar.
 * Sin esto, quien usa teclado o lector de pantalla seguiría en el menú
 * después de cada cambio de página.
 */
function EnfocarAlNavegar() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      // Deja que el navegador resuelva el ancla.
      const destino = document.getElementById(hash.slice(1));
      destino?.scrollIntoView();
      return;
    }
    const principal = document.getElementById('contenido');
    principal?.setAttribute('tabindex', '-1');
    principal?.focus({ preventScroll: true });
  }, [pathname, hash]);

  return null;
}

export default function App() {
  return (
    <>
      <a className="saltar" href="#contenido">
        Saltar al contenido principal
      </a>
      <Cabecera />
      <EnfocarAlNavegar />
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/iso-19011/:slug" element={<Seccion />} />
        <Route path="/interrelacion" element={<Interrelacion />} />
        <Route path="/fuentes" element={<Fuentes />} />
        <Route path="*" element={<Inicio />} />
      </Routes>
      <PieDePagina />
    </>
  );
}
