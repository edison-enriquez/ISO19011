import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { VINCULOS, FUENTE_27K } from '../datos/interrelacion';
import { AvisoFuente } from '../componentes/AvisoFuente';

/** Convierte "A.8" o "5.5.2" en la ruta de la sección de 19011 que lo contiene. */
function rutaDe19011(punto: string): string {
  if (punto.startsWith('A.')) return '/iso-19011/anexo-a';
  if (punto.startsWith('4')) return '/iso-19011/capitulo-4';
  if (punto.startsWith('5')) return '/iso-19011/capitulo-5';
  if (punto.startsWith('6')) return '/iso-19011/capitulo-6';
  if (punto.startsWith('7')) return '/iso-19011/capitulo-7';
  return '/iso-19011/capitulo-1-2';
}

export function Interrelacion() {
  useEffect(() => {
    document.title = 'Auditar un SGSI con ISO 19011 — correspondencia con ISO/IEC 27001';
    window.scrollTo(0, 0);
  }, []);

  const de27001 = VINCULOS.filter((v) => v.desde.norma === 'iso-27001');
  const de27002 = VINCULOS.filter((v) => v.desde.norma === 'iso-27002');

  return (
    <>
      <div className="migas">
        <div className="contenedor">
          <ol>
            <li>
              <Link to="/">Inicio</Link>
            </li>
            <li>Auditar un SGSI</li>
          </ol>
        </div>
      </div>

      <main className="principal" id="contenido">
        <div className="contenedor con-lateral">
          <article className="contenido">
            <h1 className="sin-margen-sup">Auditar un SGSI con ISO 19011</h1>
            <p className="entradilla">
              ISO/IEC 27001 dice <em>qué</em> debe cumplir un sistema de gestión de seguridad de la
              información. ISO 19011 dice <em>cómo</em> comprobarlo. Esta página empareja ambas
              cosas: para cada requisito del SGSI, el apartado de ISO 19011 que sirve para
              auditarlo.
            </p>

            <AvisoFuente fuente={FUENTE_27K} />

            <div className="caja caja-clave">
              <span className="titulo-caja">El vínculo que lo explica todo</span>
              <p>
                Todas las normas con estructura de Anexo SL —27001 incluida— tienen un apartado{' '}
                <strong>9.2 «Auditoría interna»</strong> que exige establecer, implementar y
                mantener uno o varios programas de auditoría. Ese requisito es obligatorio y
                certificable, pero <strong>no explica cómo hacerlo</strong>. El{' '}
                <Link to="/iso-19011/capitulo-5">capítulo 5 de ISO 19011</Link> es precisamente esa
                explicación.
              </p>
              <p>
                Por eso la relación entre ambas normas no es de alternativa sino de encaje: 27001
                impone la obligación, 19011 aporta el método.
              </p>
            </div>

            <h2 id="por-requisito">Correspondencia con los requisitos de ISO/IEC 27001</h2>
            <p>
              El orden sigue el articulado de 27001, que es como se recorre en una auditoría real.
              La columna de la derecha enlaza al apartado correspondiente de ISO 19011.
            </p>

            {de27001.map((v) => (
              <div className="caja caja-info" key={`${v.desde.punto}-${v.hacia.punto}`}>
                <span className="titulo-caja">
                  27001 · {v.desde.punto} — {v.desde.rotulo}
                </span>
                <p>
                  <strong>
                    Se audita con{' '}
                    <Link to={rutaDe19011(v.hacia.punto)}>
                      ISO 19011 {v.hacia.punto} — {v.hacia.rotulo}
                    </Link>
                  </strong>
                </p>
                <p>{v.nota}</p>
              </div>
            ))}

            <h2 id="por-control">Correspondencia con los controles de ISO/IEC 27002</h2>
            <p>
              Los controles no se auditan uno a uno con el mismo detalle: se muestrean. Estos son
              los apartados de ISO 19011 que gobiernan cómo hacerlo según el tipo de control.
            </p>

            {de27002.map((v) => (
              <div className="caja caja-info" key={`${v.desde.punto}-${v.hacia.punto}`}>
                <span className="titulo-caja">
                  27002 · {v.desde.punto} — {v.desde.rotulo}
                </span>
                <p>
                  <strong>
                    Se audita con{' '}
                    <Link to={rutaDe19011(v.hacia.punto)}>
                      ISO 19011 {v.hacia.punto} — {v.hacia.rotulo}
                    </Link>
                  </strong>
                </p>
                <p>{v.nota}</p>
              </div>
            ))}

            <h2 id="errores">Tres errores al auditar un SGSI</h2>

            <div className="caja caja-error">
              <span className="titulo-caja">1. Recorrer los controles por orden de numeración</span>
              <p>
                El{' '}
                <Link to="/iso-19011/capitulo-4">séptimo principio de ISO 19011</Link> obliga a
                centrar la auditoría en lo importante para el cliente y para los objetivos del
                programa. En un SGSI eso significa priorizar por riesgo, no por índice. El apartado
                5.1 lo dice sin rodeos: la prioridad va a los asuntos con riesgo inherente alto y
                nivel de desempeño bajo.
              </p>
            </div>

            <div className="caja caja-error">
              <span className="titulo-caja">
                2. Confundir la auditoría del SGSI con una auditoría de cumplimiento legal
              </span>
              <p>
                La nota del apartado 7.2.3.2 de ISO 19011 es explícita: ser consciente de los
                requisitos legales <strong>no implica ser experto en temas legales</strong>, y una
                auditoría de sistema de gestión no debería tratarse como una auditoría de
                cumplimiento legal. Lo que se audita, según{' '}
                <Link to="/iso-19011/anexo-a">A.7</Link>, es si la organización tiene procesos
                eficaces para identificar sus requisitos, gestionarlos y evaluar su estado de
                cumplimiento.
              </p>
            </div>

            <div className="caja caja-error">
              <span className="titulo-caja">3. Dar por cerrada la no conformidad al recibir el plan</span>
              <p>
                El apartado <Link to="/iso-19011/capitulo-6">6.7</Link> exige verificar que las
                acciones <strong>se completaron y que fueron eficaces</strong>. En seguridad de la
                información esto es especialmente sensible: un control reinstalado que vuelve a
                fallar a las tres semanas no es una acción eficaz, por muy bien redactado que
                estuviera el plan.
              </p>
            </div>

            <h2 id="competencia">La competencia del equipo auditor</h2>
            <p>
              Es el punto donde más auditorías de SGSI se descarrilan. ISO 19011 no exige que cada
              auditor sea especialista en seguridad de la información: exige que la{' '}
              <strong>competencia global del equipo</strong> sea suficiente para lograr los
              objetivos de la auditoría (apartado 7.1). Cuando no lo es, la norma da dos salidas y
              solo dos:
            </p>
            <ol>
              <li>
                <strong>Incorporar un experto técnico</strong> al equipo, que aporta conocimiento
                especializado pero <em>no actúa como auditor</em>: no evalúa evidencia frente a
                criterios ni formula hallazgos.
              </li>
              <li>
                <strong>Formar previamente al auditor</strong> y reevaluarlo, conforme al apartado
                7.5.
              </li>
            </ol>
            <p>
              Lo que no es una salida conforme es asignar el proceso a quien no lo domina porque
              «alguien tiene que ir». Eso vulnera el primer principio: emprender actividades de
              auditoría sólo si se es competente para hacerlo.
            </p>

            <div className="caja caja-aviso">
              <span className="titulo-caja">Auditoría interna, no certificación</span>
              <p>
                Todo lo anterior aplica a auditorías internas (de primera parte) y a auditorías a
                proveedores (de segunda parte). Para la{' '}
                <strong>certificación del SGSI por una entidad acreditada</strong> los requisitos
                los fija <strong>ISO/IEC 17021-1</strong> junto con ISO/IEC 27006, que imponen
                reglas de imparcialidad, tiempos mínimos de auditoría y competencias específicas.
                ISO 19011 sigue siendo orientación útil, pero no gobierna esa relación.
              </p>
            </div>
          </article>

          <aside className="lateral">
            <div className="widget">
              <h2>En esta página</h2>
              <div className="cuerpo">
                <ul>
                  <li>
                    <a href="#por-requisito">Requisitos de ISO/IEC 27001</a>
                  </li>
                  <li>
                    <a href="#por-control">Controles de ISO/IEC 27002</a>
                  </li>
                  <li>
                    <a href="#errores">Tres errores frecuentes</a>
                  </li>
                  <li>
                    <a href="#competencia">Competencia del equipo</a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="widget">
              <h2>ISO 19011 más usada aquí</h2>
              <div className="cuerpo">
                <ul>
                  <li>
                    <Link to="/iso-19011/capitulo-5">5. Programa de auditoría</Link>
                  </li>
                  <li>
                    <Link to="/iso-19011/capitulo-6">6. Realización de una auditoría</Link>
                  </li>
                  <li>
                    <Link to="/iso-19011/capitulo-7">7. Competencia de los auditores</Link>
                  </li>
                  <li>
                    <Link to="/iso-19011/anexo-a">Anexo A. Orientación adicional</Link>
                  </li>
                </ul>
              </div>
            </div>
          </aside>
        </div>
      </main>
    </>
  );
}
