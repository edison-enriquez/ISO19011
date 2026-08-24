/** Estado de verificación de un contenido frente a su fuente documental. */
export type Procedencia =
  /** Contrastado con la traducción oficial de ISO. */
  | 'oficial'
  /** Contrastado con una adopción nacional (NTC/GTC de ICONTEC). */
  | 'adopcion-nacional'
  /** Sin documento de respaldo disponible; procede de conocimiento general. */
  | 'sin-respaldo'
  /** Elaboración propia: ejemplos, guías prácticas, interpretaciones. */
  | 'elaboracion-propia';

export interface Fuente {
  procedencia: Procedencia;
  /** Documento concreto contra el que se verificó, si lo hay. */
  documento?: string;
  /** Advertencia que debe mostrarse al lector en la propia página. */
  advertencia?: string;
}

export interface Seccion {
  /** Identificador de ruta, p. ej. "capitulo-4". */
  slug: string;
  /** Rótulo corto para menús e índices. */
  rotulo: string;
  /** Título completo de la página. */
  titulo: string;
  descripcion: string;
  /** Clave del módulo en src/contenido cargado con ?raw. */
  contenido: string;
  fuente: Fuente;
}

export interface Norma {
  /** Identificador de ruta, p. ej. "iso-19011". */
  id: string;
  /** Designación oficial, p. ej. "ISO 19011:2018". */
  designacion: string;
  titulo: string;
  /** Frase de una línea para tarjetas y menús. */
  resumen: string;
  /** Naturaleza del documento: condiciona cómo se lee. */
  naturaleza: 'requisitos' | 'directrices' | 'codigo-de-practica';
  certificable: boolean;
  secciones: Seccion[];
  fuente: Fuente;
}

/**
 * Vínculo entre un punto de una norma y un punto de otra.
 * Es la base de la sección de interrelación: permite responder
 * "¿con qué de la 19011 audito este requisito de la 27001?".
 */
export interface Vinculo {
  desde: { norma: string; punto: string; rotulo: string };
  hacia: { norma: string; punto: string; rotulo: string };
  /** Por qué se relacionan: el valor está aquí, no en el par de códigos. */
  nota: string;
}
