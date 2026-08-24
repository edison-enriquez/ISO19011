import { Link } from 'react-router-dom';
import { ISO_19011 } from '../datos/normas';

export function PieDePagina() {
  const anio = new Date().getFullYear();

  return (
    <footer className="pie">
      <div className="contenedor">
        <div className="pie-grid">
          <div>
            <h3>Normas de auditoría</h3>
            <p>
              Guía divulgativa e independiente sobre ISO 19011:2018 y su aplicación a la auditoría
              de sistemas de gestión de seguridad de la información.
            </p>
            <p className="texto-menor">
              Sitio sin afiliación con ISO, con ICONTEC ni con ninguna institución. No se utilizan
              logotipos ni marcas institucionales.
            </p>
          </div>

          <div>
            <h3>ISO 19011</h3>
            <ul>
              {ISO_19011.secciones.slice(0, 7).map((s) => (
                <li key={s.slug}>
                  <Link to={`/iso-19011/${s.slug}`}>{s.rotulo}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3>Práctica</h3>
            <ul>
              <li>
                <Link to="/iso-19011/implantacion">Programa paso a paso</Link>
              </li>
              <li>
                <Link to="/iso-19011/anexo-a">Muestreo y entrevistas</Link>
              </li>
              <li>
                <Link to="/iso-19011/capitulo-6">El informe de auditoría</Link>
              </li>
              <li>
                <Link to="/interrelacion">Auditar un SGSI con ISO 19011</Link>
              </li>
            </ul>
          </div>

          <div>
            <h3>Recursos</h3>
            <ul>
              <li>
                <Link to="/iso-19011/capitulo-3">Glosario</Link>
              </li>
              <li>
                <Link to="/iso-19011/normas-relacionadas">Normas relacionadas</Link>
              </li>
              <li>
                <Link to="/iso-19011/preguntas-frecuentes">Preguntas frecuentes</Link>
              </li>
              <li>
                <Link to="/fuentes">Fuentes y verificación</Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="legal">
          <span>© {anio} · Contenido divulgativo sobre ISO 19011:2018</span>
          <span>
            ISO 19011:2018 es propiedad de la Organización Internacional de Normalización.
          </span>
        </div>
      </div>
    </footer>
  );
}
