import type { Vinculo, Fuente } from './tipos';

/**
 * Advertencia de procedencia para todo lo relativo a ISO/IEC 27001 y 27002.
 *
 * El lado de ISO 19011 de cada vínculo está verificado contra la traducción
 * oficial. El lado de 27001/27002 NO tiene documento de respaldo en este
 * proyecto: los PDF aportados son GTC-ISO/IEC 27002 (2015), que es la
 * adopción de ISO/IEC 27002:2013 con 14 dominios y 114 controles, y
 * NTC-ISO/IEC 27005 (2009), adopción de ISO/IEC 27005:2008. Ninguno
 * corresponde a las ediciones de 2022 que se referencian aquí.
 */
export const FUENTE_27K: Fuente = {
  procedencia: 'sin-respaldo',
  documento: 'ISO/IEC 27001:2022 e ISO/IEC 27002:2022',
  advertencia:
    'Las referencias a ISO/IEC 27001:2022 y 27002:2022 no están contrastadas contra el texto de esas normas: los documentos disponibles en este proyecto son las adopciones colombianas de las ediciones 2013 y 2008. Verifíquelas contra el texto oficial antes de usarlas como criterio de auditoría.',
};

/**
 * Correspondencia entre los requisitos de ISO/IEC 27001 y la orientación
 * de ISO 19011 que sirve para auditarlos.
 *
 * El orden sigue el articulado de 27001, que es como se recorre en una
 * auditoría real.
 */
export const VINCULOS: Vinculo[] = [
  {
    desde: { norma: 'iso-27001', punto: '4', rotulo: 'Contexto de la organización' },
    hacia: { norma: 'iso-19011', punto: 'A.8', rotulo: 'Auditoría del contexto' },
    nota: 'A.8 pide evidencia objetiva de los procesos usados para determinar el contexto, de la competencia de quienes participan, de sus resultados y de su revisión periódica. Es lo que convierte el capítulo 4 de 27001 en algo auditable y no en una declaración de intenciones.',
  },
  {
    desde: { norma: 'iso-27001', punto: '4.2', rotulo: 'Partes interesadas y sus requisitos' },
    hacia: { norma: 'iso-19011', punto: '5.5.2', rotulo: 'Criterios de la auditoría' },
    nota: 'La edición de 2018 permite que los requisitos de las partes interesadas determinados por el propio auditado sean criterios de auditoría. Permite auditar el SGSI contra su propio análisis de partes interesadas, no solo contra la norma.',
  },
  {
    desde: { norma: 'iso-27001', punto: '5', rotulo: 'Liderazgo y compromiso' },
    hacia: { norma: 'iso-19011', punto: 'A.9', rotulo: 'Auditoría del liderazgo y el compromiso' },
    nota: 'A.9 indica entrevistar a la alta dirección para confirmar que comprende las cuestiones específicas de la disciplina —aquí, la seguridad de la información— y el contexto en que opera. Y advierte de no limitarse a la alta dirección: hay que auditar el liderazgo en otros niveles.',
  },
  {
    desde: { norma: 'iso-27001', punto: '6.1', rotulo: 'Acciones para tratar riesgos y oportunidades' },
    hacia: { norma: 'iso-19011', punto: 'A.10', rotulo: 'Auditoría de riesgos y oportunidades' },
    nota: 'A.10 es explícito en que esto no se audita como actividad aislada: debe estar implícito durante toda la auditoría del sistema, incluidas las entrevistas con la alta dirección. Hay que recoger evidencia de las entradas usadas y del método de evaluación.',
  },
  {
    desde: { norma: 'iso-27001', punto: '6.1.2 y 6.1.3', rotulo: 'Apreciación y tratamiento de riesgos de seguridad de la información' },
    hacia: { norma: 'iso-19011', punto: '4 g)', rotulo: 'Principio de enfoque basado en riesgos' },
    nota: 'El séptimo principio obliga a centrar la auditoría en lo importante para el cliente y para los objetivos del programa. En un SGSI, eso significa dedicar el tiempo a los activos y procesos con riesgo alto, no a recorrer los controles por orden de numeración.',
  },
  {
    desde: { norma: 'iso-27001', punto: '6.1.3 d)', rotulo: 'Declaración de aplicabilidad' },
    hacia: { norma: 'iso-19011', punto: '6.3.1', rotulo: 'Revisión de la información documentada' },
    nota: 'La Declaración de Aplicabilidad es el documento que fija qué controles entran en el alcance y por qué se excluyen los demás. Revisarla en la preparación permite detectar deficiencias, omisiones o conflictos antes de pisar la organización.',
  },
  {
    desde: { norma: 'iso-27001', punto: '7.2', rotulo: 'Competencia' },
    hacia: { norma: 'iso-19011', punto: '7.2.3.3', rotulo: 'Competencia del auditor en la disciplina y el sector' },
    nota: 'Son dos competencias distintas que se cruzan: 27001 exige competencia al personal del SGSI; 19011 exige que el equipo auditor tenga, de forma colectiva, competencia en la disciplina para poder evaluarla. Si el equipo no la tiene, hay que incorporar un experto técnico, que no actúa como auditor.',
  },
  {
    desde: { norma: 'iso-27001', punto: '7.5', rotulo: 'Información documentada' },
    hacia: { norma: 'iso-19011', punto: 'A.5', rotulo: 'Verificación de la información' },
    nota: 'A.5 da los cuatro criterios: completa, correcta, coherente y actual. Y añade una cautela crítica en seguridad de la información: cuidado específico con los reglamentos de protección de datos, sobre todo con la información que queda fuera del alcance pero está contenida en el mismo documento.',
  },
  {
    desde: { norma: 'iso-27001', punto: '8', rotulo: 'Operación' },
    hacia: { norma: 'iso-19011', punto: 'A.6', rotulo: 'Muestreo' },
    nota: 'La operación de un SGSI produce volúmenes de registros que no se pueden examinar al 100 %: accesos, copias de respaldo, incidentes, parches. A.6 distingue el muestreo basado en juicio del estadístico y obliga a documentar el trabajo cuando se usa el segundo.',
  },
  {
    desde: { norma: 'iso-27001', punto: '9.1', rotulo: 'Seguimiento, medición, análisis y evaluación' },
    hacia: { norma: 'iso-19011', punto: 'A.4', rotulo: 'Resultados del desempeño' },
    nota: 'A.4 recuerda que lo que cuenta es el resultado del sistema y su desempeño, no solo los procesos. Y matiza la proporcionalidad: la ausencia de un proceso o de documentación puede ser importante en una organización de alto riesgo y no serlo en otra.',
  },
  {
    desde: { norma: 'iso-27001', punto: '9.2', rotulo: 'Auditoría interna' },
    hacia: { norma: 'iso-19011', punto: '5', rotulo: 'Gestión de un programa de auditoría' },
    nota: 'Este es el vínculo principal entre ambas normas. El apartado 9.2 de 27001 exige establecer, implementar y mantener uno o varios programas de auditoría; el capítulo 5 de 19011 es la guía completa de cómo hacerlo, incluidos los riesgos del propio programa.',
  },
  {
    desde: { norma: 'iso-27001', punto: '9.3', rotulo: 'Revisión por la dirección' },
    hacia: { norma: 'iso-19011', punto: '5.7', rotulo: 'Revisión y mejora del programa de auditoría' },
    nota: 'Los resultados del programa de auditoría alimentan la revisión por la dirección, y esta devuelve entradas para el ciclo siguiente. 19011 añade que la revisión del programa la hacen conjuntamente el responsable del programa y el cliente de la auditoría.',
  },
  {
    desde: { norma: 'iso-27001', punto: '10.2', rotulo: 'No conformidad y acción correctiva' },
    hacia: { norma: 'iso-19011', punto: '6.7', rotulo: 'Actividades de seguimiento de una auditoría' },
    nota: 'La no conformidad no se cierra al recibir el plan de acción ni al ejecutarlo: 19011 exige verificar que las acciones se completaron y que fueron eficaces, y esa verificación puede formar parte de una auditoría posterior.',
  },
  {
    desde: { norma: 'iso-27002', punto: '5.19 a 5.23', rotulo: 'Seguridad en las relaciones con proveedores' },
    hacia: { norma: 'iso-19011', punto: 'A.12', rotulo: 'Auditoría de la cadena de suministro' },
    nota: 'A.12 indica que el programa de auditoría de proveedores debe desarrollarse con criterios aplicables al tipo de suministrador, y que el alcance puede variar: sistema completo, un solo proceso, un producto o una configuración. Aplica de lleno a los proveedores de servicios en la nube.',
  },
  {
    desde: { norma: 'iso-27002', punto: '5.31 a 5.36', rotulo: 'Requisitos legales y cumplimiento' },
    hacia: { norma: 'iso-19011', punto: 'A.7', rotulo: 'Auditoría del cumplimiento dentro de un sistema de gestión' },
    nota: 'A.7 se audita el proceso, no la legalidad: si el auditado identifica sus requisitos, gestiona sus actividades para cumplirlos y evalúa su estado de cumplimiento. La norma advierte que ser consciente de los requisitos legales no implica ser experto legal.',
  },
  {
    desde: { norma: 'iso-27002', punto: '5.7', rotulo: 'Inteligencia de amenazas' },
    hacia: { norma: 'iso-19011', punto: '6.4.4', rotulo: 'Comunicación durante la auditoría' },
    nota: 'Si durante la auditoría aparece evidencia de un riesgo inmediato y significativo —una brecha activa, una credencial expuesta—, 19011 obliga a comunicarlo sin demora al auditado y, según proceda, al cliente. No se espera a la reunión de cierre.',
  },
  {
    desde: { norma: 'iso-27002', punto: '7.1 a 7.14', rotulo: 'Controles físicos' },
    hacia: { norma: 'iso-19011', punto: 'A.15', rotulo: 'Visita a la ubicación del auditado' },
    nota: 'A.15 cubre autorizaciones y accesos, equipo de protección, procedimientos de emergencia, la prohibición de tocar o manipular equipos aunque se tenga competencia, y el permiso previo para fotografiar documentos o instalaciones.',
  },
  {
    desde: { norma: 'iso-27002', punto: '8.1 a 8.34', rotulo: 'Controles tecnológicos' },
    hacia: { norma: 'iso-19011', punto: 'A.16', rotulo: 'Auditoría de actividades y ubicaciones virtuales' },
    nota: 'Cuando la ubicación auditada es un entorno en línea —la intranet o la nube—, A.16 exige protocolos de acceso remoto acordados, verificaciones técnicas previas, planes de contingencia comunicados y competencia técnica del auditor en las herramientas.',
  },
];

/** Agrupa los vínculos por la norma de origen, para renderizar por bloques. */
export function vinculosPorNorma(): Record<string, Vinculo[]> {
  return VINCULOS.reduce<Record<string, Vinculo[]>>((acc, v) => {
    (acc[v.desde.norma] ||= []).push(v);
    return acc;
  }, {});
}
