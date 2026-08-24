import { useEffect } from 'react';
import { Link, Navigate, useParams } from 'react-router-dom';
import { CONTENIDO, ISO_19011, buscarSeccion } from '../datos/normas';
import { ContenidoHtml } from '../componentes/ContenidoHtml';
import { AvisoFuente } from '../componentes/AvisoFuente';

export function Seccion() {
  const { slug = '' } = useParams();
  const seccion = buscarSeccion('iso-19011', slug);

  useEffect(() => {
    if (!seccion) return;
    document.title = `${seccion.titulo} — ISO 19011`;
    const meta = document.querySelector('meta[name="description"]');
    meta?.setAttribute('content', seccion.descripcion);
    // Sin ancla en la URL, arranca arriba: al cambiar de capítulo, el
    // navegador conservaría el scroll anterior.
    if (!window.location.hash) window.scrollTo(0, 0);
  }, [seccion]);

  if (!seccion) return <Navigate to="/" replace />;

  const indice = ISO_19011.secciones.findIndex((s) => s.slug === slug);
  const anterior = ISO_19011.secciones[indice - 1];
  const siguiente = ISO_19011.secciones[indice + 1];

  return (
    <>
      <div className="migas">
        <div className="contenedor">
          <ol>
            <li>
              <Link to="/">Inicio</Link>
            </li>
            <li>
              <Link to="/iso-19011/capitulo-1-2">ISO 19011</Link>
            </li>
            <li>{seccion.rotulo}</li>
          </ol>
        </div>
      </div>

      <main className="principal" id="contenido">
        <div className="contenedor con-lateral">
          <article>
            <AvisoFuente fuente={seccion.fuente} />
            <ContenidoHtml html={CONTENIDO[seccion.contenido]} />

            <nav className="nav-clausulas" aria-label="Navegación entre capítulos">
              {anterior ? (
                <Link to={`/iso-19011/${anterior.slug}`}>
                  <span>Anterior</span>
                  <strong>{anterior.rotulo}</strong>
                </Link>
              ) : (
                <Link to="/">
                  <span>Anterior</span>
                  <strong>Inicio</strong>
                </Link>
              )}
              {siguiente ? (
                <Link className="siguiente" to={`/iso-19011/${siguiente.slug}`}>
                  <span>Siguiente</span>
                  <strong>{siguiente.rotulo}</strong>
                </Link>
              ) : (
                <Link className="siguiente" to="/interrelacion">
                  <span>Siguiente</span>
                  <strong>Auditar un SGSI con ISO 19011</strong>
                </Link>
              )}
            </nav>
          </article>

          <aside className="lateral">
            <div className="widget">
              <h2>ISO 19011:2018</h2>
              <div className="cuerpo">
                <ul>
                  {ISO_19011.secciones.map((s) => (
                    <li key={s.slug} className={s.slug === slug ? 'activo' : undefined}>
                      <Link to={`/iso-19011/${s.slug}`}>{s.rotulo}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="widget widget-destacado">
              <h2>Auditar un SGSI</h2>
              <p>
                Qué apartado de ISO 19011 sirve para auditar cada requisito de ISO/IEC 27001, y por
                qué.
              </p>
              <Link className="boton boton-claro" to="/interrelacion">
                Ver la correspondencia
              </Link>
            </div>
          </aside>
        </div>
      </main>
    </>
  );
}
