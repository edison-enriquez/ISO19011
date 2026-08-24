import { useMemo, type MouseEvent } from 'react';
import { useNavigate } from 'react-router-dom';

/** Slugs que en el sitio estático eran páginas y ahora son rutas de la SPA. */
const RUTA_POR_ARCHIVO: Record<string, string> = {
  'index.html': '/',
  'capitulo-1-2.html': '/iso-19011/capitulo-1-2',
  'capitulo-3.html': '/iso-19011/capitulo-3',
  'capitulo-4.html': '/iso-19011/capitulo-4',
  'capitulo-5.html': '/iso-19011/capitulo-5',
  'capitulo-6.html': '/iso-19011/capitulo-6',
  'capitulo-7.html': '/iso-19011/capitulo-7',
  'anexo-a.html': '/iso-19011/anexo-a',
  'implantacion.html': '/iso-19011/implantacion',
  'normas-relacionadas.html': '/iso-19011/normas-relacionadas',
  'preguntas-frecuentes.html': '/iso-19011/preguntas-frecuentes',
};

/**
 * Reescribe los href heredados del sitio estático a rutas de la SPA,
 * conservando el fragmento (#ancla) cuando lo hay.
 */
function reescribirEnlaces(html: string): string {
  return html.replace(/href="([^"]+)"/g, (original, destino: string) => {
    if (/^(https?:|mailto:|#|\/)/.test(destino)) return original;
    const [archivo, ancla] = destino.split('#');
    const ruta = RUTA_POR_ARCHIVO[archivo];
    if (!ruta) return original;
    return `href="${ruta}${ancla ? `#${ancla}` : ''}"`;
  });
}

interface Props {
  html: string;
}

/**
 * Renderiza los fragmentos de contenido del sitio.
 *
 * Sobre dangerouslySetInnerHTML: el HTML procede exclusivamente de
 * src/contenido, son archivos propios incluidos en el bundle en tiempo de
 * compilación. No hay entrada de usuario ni contenido remoto en este camino,
 * por lo que no existe superficie de XSS. Si algún día el contenido pasa a
 * venir de un CMS o de la red, hay que sanearlo antes de llegar aquí.
 */
export function ContenidoHtml({ html }: Props) {
  const navigate = useNavigate();
  const procesado = useMemo(() => reescribirEnlaces(html), [html]);

  // Delegación: intercepta los enlaces internos para no recargar la página.
  const alHacerClic = (e: MouseEvent<HTMLDivElement>) => {
    const destino = (e.target as HTMLElement).closest('a');
    if (!destino) return;

    const href = destino.getAttribute('href');
    if (!href || !href.startsWith('/')) return;

    // Respeta las intenciones de abrir en pestaña nueva.
    if (e.metaKey || e.ctrlKey || e.shiftKey || e.button !== 0) return;
    if (destino.target === '_blank') return;

    e.preventDefault();
    navigate(href);
  };

  return (
    <div
      className="contenido"
      onClick={alHacerClic}
      dangerouslySetInnerHTML={{ __html: procesado }}
    />
  );
}
