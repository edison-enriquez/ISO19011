import { Link } from 'react-router-dom';
import type { Fuente } from '../datos/tipos';

const ETIQUETA: Record<Fuente['procedencia'], string> = {
  oficial: 'Verificado contra la traducción oficial de ISO',
  'adopcion-nacional': 'Verificado contra la adopción nacional (ICONTEC)',
  'sin-respaldo': 'Sin documento de respaldo',
  'elaboracion-propia': 'Elaboración propia',
};

/**
 * Muestra de dónde viene el contenido de la página.
 *
 * Solo se renderiza cuando hay algo que advertir: si el contenido está
 * verificado contra la fuente oficial, un banner permanente sería ruido.
 */
export function AvisoFuente({ fuente }: { fuente: Fuente }) {
  if (fuente.procedencia === 'oficial') return null;

  return (
    <aside className="aviso-fuente" role="note">
      <strong>{ETIQUETA[fuente.procedencia]}.</strong>{' '}
      {fuente.advertencia ??
        'Contraste este contenido con el texto oficial antes de usarlo como criterio de auditoría.'}{' '}
      {fuente.documento && <>Documento de referencia: {fuente.documento}. </>}
      <Link to="/fuentes">Ver todas las fuentes</Link>.
    </aside>
  );
}
