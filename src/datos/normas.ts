import type { Norma, Fuente } from './tipos';

// El contenido de ISO 19011 se importa como HTML crudo desde src/contenido.
// Procede de las páginas ya verificadas frente a la traducción oficial de ISO
// (avalada por el Spanish Translation Task Force del comité ISO/CASCO).
// Importarlo en vez de reescribirlo evita introducir erratas nuevas.
import cInicio from '../contenido/index.html?raw';
import c12 from '../contenido/capitulo-1-2.html?raw';
import c3 from '../contenido/capitulo-3.html?raw';
import c4 from '../contenido/capitulo-4.html?raw';
import c5 from '../contenido/capitulo-5.html?raw';
import c6 from '../contenido/capitulo-6.html?raw';
import c7 from '../contenido/capitulo-7.html?raw';
import cAnexoA from '../contenido/anexo-a.html?raw';
import cImplantacion from '../contenido/implantacion.html?raw';
import cRelacionadas from '../contenido/normas-relacionadas.html?raw';
import cFaq from '../contenido/preguntas-frecuentes.html?raw';

export const CONTENIDO: Record<string, string> = {
  'index': cInicio,
  'capitulo-1-2': c12,
  'capitulo-3': c3,
  'capitulo-4': c4,
  'capitulo-5': c5,
  'capitulo-6': c6,
  'capitulo-7': c7,
  'anexo-a': cAnexoA,
  'implantacion': cImplantacion,
  'normas-relacionadas': cRelacionadas,
  'preguntas-frecuentes': cFaq,
};

const FUENTE_19011: Fuente = {
  procedencia: 'oficial',
  documento: 'ISO 19011:2018 (traducción oficial al español, ISO/CASCO STTF)',
};

const FUENTE_PROPIA: Fuente = {
  procedencia: 'elaboracion-propia',
  advertencia:
    'Esta página es elaboración propia con fines didácticos: ordena y aplica la norma, pero su contenido no es texto normativo.',
};

export const ISO_19011: Norma = {
  id: 'iso-19011',
  designacion: 'ISO 19011:2018',
  titulo: 'Directrices para la auditoría de los sistemas de gestión',
  resumen:
    'Cómo dirigir un programa de auditoría, realizar cada auditoría y evaluar la competencia de los auditores.',
  naturaleza: 'directrices',
  certificable: false,
  fuente: FUENTE_19011,
  secciones: [
    {
      slug: 'capitulo-1-2',
      rotulo: '1 y 2. Objeto y campo de aplicación',
      titulo: 'Capítulos 1 y 2: objeto, campo de aplicación y referencias normativas',
      descripcion:
        'Qué cubre ISO 19011:2018, a qué organizaciones se aplica, sus límites y por qué no tiene referencias normativas.',
      contenido: 'capitulo-1-2',
      fuente: FUENTE_19011,
    },
    {
      slug: 'capitulo-3',
      rotulo: '3. Términos y definiciones',
      titulo: 'Capítulo 3: términos y definiciones',
      descripcion:
        'Los 26 términos que fijan el lenguaje de la auditoría: criterios, evidencia objetiva, hallazgos, conclusiones, riesgo.',
      contenido: 'capitulo-3',
      fuente: FUENTE_19011,
    },
    {
      slug: 'capitulo-4',
      rotulo: '4. Principios de la auditoría',
      titulo: 'Capítulo 4: los siete principios de la auditoría',
      descripcion:
        'Integridad, presentación imparcial, debido cuidado profesional, confidencialidad, independencia, enfoque basado en la evidencia y enfoque basado en riesgos.',
      contenido: 'capitulo-4',
      fuente: FUENTE_19011,
    },
    {
      slug: 'capitulo-5',
      rotulo: '5. Gestión de un programa de auditoría',
      titulo: 'Capítulo 5: gestión de un programa de auditoría',
      descripcion:
        'Objetivos, riesgos y oportunidades del programa, recursos, implementación, seguimiento y mejora.',
      contenido: 'capitulo-5',
      fuente: FUENTE_19011,
    },
    {
      slug: 'capitulo-6',
      rotulo: '6. Realización de una auditoría',
      titulo: 'Capítulo 6: realización de una auditoría',
      descripcion:
        'El ciclo completo: inicio, preparación, reunión de apertura, evidencias, hallazgos, cierre, informe y seguimiento.',
      contenido: 'capitulo-6',
      fuente: FUENTE_19011,
    },
    {
      slug: 'capitulo-7',
      rotulo: '7. Competencia y evaluación de los auditores',
      titulo: 'Capítulo 7: competencia y evaluación de los auditores',
      descripcion:
        'Comportamiento personal, conocimientos y habilidades, criterios y métodos de evaluación, y mantenimiento de la competencia.',
      contenido: 'capitulo-7',
      fuente: FUENTE_19011,
    },
    {
      slug: 'anexo-a',
      rotulo: 'Anexo A. Orientación adicional',
      titulo: 'Anexo A (informativo): orientación adicional para los auditores',
      descripcion:
        'Los 18 apartados operativos: métodos, muestreo, contexto, liderazgo, riesgos, auditoría virtual, entrevistas y hallazgos.',
      contenido: 'anexo-a',
      fuente: FUENTE_19011,
    },
    {
      slug: 'implantacion',
      rotulo: 'Programa paso a paso',
      titulo: 'Programa de auditoría paso a paso: las 10 fases',
      descripcion:
        'Lectura operativa de los capítulos 5 y 6 ordenada como se ejecuta en una organización real.',
      contenido: 'implantacion',
      fuente: FUENTE_PROPIA,
    },
    {
      slug: 'normas-relacionadas',
      rotulo: 'Normas relacionadas',
      titulo: 'Normas relacionadas con ISO 19011',
      descripcion:
        'El Anexo SL, ISO 9001, 14001, 45001, 27001, el vocabulario de ISO 9000 y la frontera con ISO/IEC 17021-1.',
      contenido: 'normas-relacionadas',
      fuente: FUENTE_PROPIA,
    },
    {
      slug: 'preguntas-frecuentes',
      rotulo: 'Preguntas frecuentes',
      titulo: 'Preguntas frecuentes sobre ISO 19011',
      descripcion:
        'Las dudas más habituales al aplicar la norma, con la referencia al apartado que las responde.',
      contenido: 'preguntas-frecuentes',
      fuente: FUENTE_PROPIA,
    },
  ],
};

export const NORMAS: Norma[] = [ISO_19011];

export function buscarNorma(id: string): Norma | undefined {
  return NORMAS.find((n) => n.id === id);
}

export function buscarSeccion(idNorma: string, slug: string) {
  const norma = buscarNorma(idNorma);
  return norma?.secciones.find((s) => s.slug === slug);
}
