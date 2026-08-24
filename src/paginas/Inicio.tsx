import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { CONTENIDO, ISO_19011 } from '../datos/normas';
import { ContenidoHtml } from '../componentes/ContenidoHtml';

export function Inicio() {
  useEffect(() => {
    document.title = 'ISO 19011:2018 — Directrices para la auditoría de los sistemas de gestión';
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <section className="hero">
        <div className="contenedor hero-grid">
          <div>
            <span className="etiqueta">Tercera edición · Julio 2018</span>
            <h1>ISO 19011:2018 — Directrices para la auditoría de los sistemas de gestión</h1>
            <p>
              La norma de referencia para planificar, ejecutar y mejorar auditorías de cualquier
              sistema de gestión — y la guía con la que se audita un SGSI conforme a ISO/IEC 27001.
            </p>
            <div className="hero-acciones">
              <Link className="boton boton-principal" to="/iso-19011/capitulo-4">
                Los 7 principios
              </Link>
              <Link className="boton boton-claro" to="/interrelacion">
                Auditar un SGSI
              </Link>
            </div>
          </div>

          <aside className="tarjeta-ficha">
            <h2>Ficha de la norma</h2>
            <dl>
              <div className="fila">
                <dt>Referencia</dt>
                <dd>ISO 19011:2018</dd>
              </div>
              <div className="fila">
                <dt>Edición</dt>
                <dd>Tercera (2018-07)</dd>
              </div>
              <div className="fila">
                <dt>Sustituye a</dt>
                <dd>ISO 19011:2011</dd>
              </div>
              <div className="fila">
                <dt>Comité</dt>
                <dd>ISO/PC 302</dd>
              </div>
              <div className="fila">
                <dt>Naturaleza</dt>
                <dd>Directriz, no certificable</dd>
              </div>
              <div className="fila">
                <dt>Capítulos</dt>
                <dd>7 + Anexo A informativo</dd>
              </div>
              <div className="fila">
                <dt>ICS</dt>
                <dd>03.120.20; 03.100.70</dd>
              </div>
            </dl>
          </aside>
        </div>
      </section>

      <div className="franja">
        <div className="contenedor franja-grid">
          <div className="dato">
            <strong>7</strong>
            <span>principios de auditoría</span>
          </div>
          <div className="dato">
            <strong>3</strong>
            <span>tipos de auditoría</span>
          </div>
          <div className="dato">
            <strong>18</strong>
            <span>apartados en el Anexo A</span>
          </div>
          <div className="dato">
            <strong>0</strong>
            <span>requisitos certificables</span>
          </div>
        </div>
      </div>

      <main className="principal" id="contenido">
        <div className="contenedor con-lateral">
          <article>
            <ContenidoHtml html={CONTENIDO['index']} />
          </article>

          <aside className="lateral">
            <div className="widget">
              <h2>ISO 19011:2018</h2>
              <div className="cuerpo">
                <ul>
                  {ISO_19011.secciones.map((s) => (
                    <li key={s.slug}>
                      <Link to={`/iso-19011/${s.slug}`}>{s.rotulo}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="widget widget-destacado">
              <h2>De la 19011 a la 27001</h2>
              <p>
                Diecisiete correspondencias entre los requisitos del SGSI y la orientación de ISO
                19011 que sirve para auditarlos.
              </p>
              <Link className="boton boton-claro" to="/interrelacion">
                Ver la correspondencia
              </Link>
            </div>

            <div className="widget">
              <h2>Sobre las fuentes</h2>
              <div className="texto">
                <p>
                  El contenido de ISO 19011 está contrastado con la traducción oficial de ISO. El de
                  ISO/IEC 27001 y 27002 no tiene documento de respaldo en este proyecto.
                </p>
                <p>
                  <Link to="/fuentes">Ver el detalle</Link>
                </p>
              </div>
            </div>
          </aside>
        </div>
      </main>

      <section className="cta">
        <div className="contenedor">
          <h2>La auditoría no es un trámite: es información para decidir</h2>
          <p>
            Un programa bien diseñado detecta los problemas antes que el cliente, antes que el
            regulador y antes que el auditor de certificación.
          </p>
          <Link className="boton boton-principal" to="/iso-19011/implantacion">
            Programa de auditoría en 10 fases
          </Link>
        </div>
      </section>
    </>
  );
}
