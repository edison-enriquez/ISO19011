import { useEffect } from 'react';
import { Link } from 'react-router-dom';

export function Fuentes() {
  useEffect(() => {
    document.title = 'Fuentes y verificación';
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div className="migas">
        <div className="contenedor">
          <ol>
            <li>
              <Link to="/">Inicio</Link>
            </li>
            <li>Fuentes y verificación</li>
          </ol>
        </div>
      </div>

      <main className="principal" id="contenido">
        <div className="contenedor">
          <article className="contenido" style={{ maxWidth: '820px' }}>
            <h1 className="sin-margen-sup">Fuentes y verificación</h1>
            <p className="entradilla">
              No todo el contenido de este sitio tiene el mismo respaldo documental. Esta página
              dice exactamente qué se verificó, contra qué, y qué no.
            </p>

            <h2>Contenido verificado</h2>
            <div className="tabla-scroll">
              <table className="tabla">
                <thead>
                  <tr>
                    <th style={{ width: '32%' }}>Contenido</th>
                    <th>Fuente</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <strong>ISO 19011:2018</strong>, capítulos 1 a 7 y Anexo A
                    </td>
                    <td>
                      Traducción oficial al español de ISO, avalada por el{' '}
                      <em>Spanish Translation Task Force</em> del comité ISO/CASCO, en el que
                      participan los organismos de normalización de dieciocho países junto con
                      COPANT e INLAC. Terminología, títulos de apartados y listas contrastados uno a
                      uno.
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2>Contenido sin respaldo documental</h2>
            <div className="caja caja-aviso">
              <span className="titulo-caja">Léase con cautela</span>
              <p>
                Las referencias a <strong>ISO/IEC 27001:2022</strong> y{' '}
                <strong>ISO/IEC 27002:2022</strong> proceden de conocimiento general, no de los
                textos de esas normas. Los documentos disponibles en este proyecto son adopciones
                colombianas de ediciones anteriores:
              </p>
              <ul>
                <li>
                  <strong>GTC-ISO/IEC 27002 (2015-07-22)</strong> — idéntica por traducción a{' '}
                  <strong>ISO/IEC 27002:2013</strong> + Cor 1:2014. Estructura de{' '}
                  <strong>14 dominios y 114 controles</strong>, no la de 4 temas y 93 controles de
                  2022.
                </li>
                <li>
                  <strong>NTC-ISO/IEC 27005 (2009-08-19)</strong> — adopción idéntica de{' '}
                  <strong>ISO/IEC 27005:2008</strong>, superada por las ediciones de 2011, 2018 y
                  2022.
                </li>
              </ul>
              <p>
                Verifique cualquier referencia a 27001 o 27002 contra el texto oficial antes de
                usarla como criterio de auditoría.
              </p>
            </div>

            <h2>Elaboración propia</h2>
            <p>
              Las páginas de <Link to="/iso-19011/implantacion">programa paso a paso</Link>,{' '}
              <Link to="/iso-19011/normas-relacionadas">normas relacionadas</Link>,{' '}
              <Link to="/iso-19011/preguntas-frecuentes">preguntas frecuentes</Link> y{' '}
              <Link to="/interrelacion">auditar un SGSI</Link>, junto con los ejemplos y las cajas
              de «error frecuente» repartidas por el sitio, son elaboración propia con fines
              didácticos. Ordenan y aplican la norma, pero <strong>no son texto normativo</strong> y
              no deben citarse como tal.
            </p>

            <h2>Sobre las normas y su adquisición</h2>
            <p>
              Las normas ISO son documentos con derechos de autor. Este sitio las explica y resume;
              no las reproduce ni las sustituye. El texto oficial debe adquirirse en ISO o en el
              organismo nacional de normalización correspondiente — en Colombia,{' '}
              <strong>ICONTEC</strong>.
            </p>

            <div className="caja caja-info">
              <span className="titulo-caja">Independencia</span>
              <p>
                Este sitio no está afiliado a ISO, a IEC, a ICONTEC ni a ninguna institución
                académica. No utiliza logotipos, escudos ni marcas institucionales. La paleta de
                color es una referencia cromática, no un uso de identidad corporativa.
              </p>
            </div>
          </article>
        </div>
      </main>
    </>
  );
}
