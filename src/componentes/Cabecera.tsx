import { useEffect, useRef, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { ISO_19011 } from '../datos/normas';

export function Cabecera() {
  const [abierto, setAbierto] = useState(false);
  const [submenuAbierto, setSubmenuAbierto] = useState(false);
  const { pathname } = useLocation();
  const cabecera = useRef<HTMLElement>(null);

  const cerrarTodo = () => {
    setAbierto(false);
    setSubmenuAbierto(false);
  };

  // Al navegar, cierra el menú móvil y el desplegable.
  useEffect(cerrarTodo, [pathname]);

  // Escape cierra; un clic fuera de la cabecera también.
  useEffect(() => {
    if (!abierto && !submenuAbierto) return;

    const alPulsar = (e: KeyboardEvent) => {
      if (e.key === 'Escape') cerrarTodo();
    };
    const alClicarFuera = (e: PointerEvent) => {
      if (!cabecera.current?.contains(e.target as Node)) cerrarTodo();
    };

    document.addEventListener('keydown', alPulsar);
    document.addEventListener('pointerdown', alClicarFuera);
    return () => {
      document.removeEventListener('keydown', alPulsar);
      document.removeEventListener('pointerdown', alClicarFuera);
    };
  }, [abierto, submenuAbierto]);

  const enNorma = pathname.startsWith('/iso-19011');

  return (
    <>
      <div className="barra-superior">
        <div className="contenedor">
          <span className="lema">Guía de referencia sobre auditoría de sistemas de gestión</span>
          <nav className="enlaces" aria-label="Enlaces rápidos">
            <Link to="/iso-19011/capitulo-3">Glosario</Link>
            <Link to="/iso-19011/preguntas-frecuentes">Preguntas frecuentes</Link>
            <Link to="/interrelacion">Auditar un SGSI</Link>
          </nav>
        </div>
      </div>

      <header className="cabecera" ref={cabecera}>
        <div className="contenedor">
          <Link className="logo" to="/">
            <span className="marca" aria-hidden="true">
              19011
            </span>
            <span className="texto">
              <strong>Normas de auditoría</strong>
              <span>Sistemas de gestión y SGSI</span>
            </span>
          </Link>

          <button
            className="nav-boton"
            type="button"
            aria-expanded={abierto}
            aria-controls="menu-principal"
            onClick={() => setAbierto((v) => !v)}
          >
            ☰ Menú
          </button>

          <nav
            className={`nav${abierto ? ' abierto' : ''}`}
            id="menu-principal"
            aria-label="Navegación principal"
          >
            <ul>
              <li className={pathname === '/' ? 'activo' : undefined}>
                <NavLink to="/">Inicio</NavLink>
              </li>

              <li className={`tiene-hijos${enNorma ? ' activo' : ''}`}>
                <button
                  type="button"
                  aria-haspopup="true"
                  aria-expanded={submenuAbierto}
                  aria-controls="submenu-iso-19011"
                  onClick={() => setSubmenuAbierto((v) => !v)}
                >
                  ISO 19011
                </button>
                <ul
                  className={`submenu${submenuAbierto ? ' abierto' : ''}`}
                  id="submenu-iso-19011"
                >
                  {ISO_19011.secciones.map((s) => (
                    <li key={s.slug}>
                      <Link to={`/iso-19011/${s.slug}`}>{s.rotulo}</Link>
                    </li>
                  ))}
                </ul>
              </li>

              <li className={pathname === '/interrelacion' ? 'activo' : undefined}>
                <NavLink to="/interrelacion">Auditar un SGSI</NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
}
