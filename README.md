# Normas de auditoría — ISO 19011 y SGSI

Sitio divulgativo en React + Vite sobre **ISO 19011:2018** y su aplicación a la
auditoría de sistemas de gestión de seguridad de la información.

## Requisitos

Node.js 18 o superior. **No está instalado en este equipo.** Instálelo con:

```powershell
winget install OpenJS.NodeJS.LTS
```

Cierre y reabra la terminal para que `node` y `npm` queden en el `PATH`.

## Arranque

```bash
cd web
npm install
npm run dev      # servidor de desarrollo en http://localhost:5173
npm run build    # compila a web/dist
npm run preview  # sirve lo compilado
npm run lint     # comprobación de tipos sin emitir
```

## Despliegue

El sitio usa `BrowserRouter`, no `HashRouter`, porque el contenido depende de
anclas internas (`#a6`, `#fase-3`, los índices laterales) y con hash routing
cada ancla se interpretaría como una ruta.

Eso obliga a que el alojamiento **reescriba cualquier ruta al `index.html`**:

- **Netlify** — crear `public/_redirects` con `/*  /index.html  200`
- **Vercel** — `vercel.json` con un `rewrite` de `/(.*)` a `/index.html`
- **Apache** — `RewriteRule . /index.html [L]` en `.htaccess`
- **Nginx** — `try_files $uri $uri/ /index.html;`
- **GitHub Pages** — copiar `dist/index.html` como `dist/404.html`

`npm run dev` y `npm run preview` ya lo hacen solos. Abrir `dist/index.html`
con `file://` **no** funcionará: hace falta un servidor.

## Estructura

```
web/
  src/
    tema/
      tokens.css        ← ÚNICO archivo con colores literales
      global.css        ← sistema visual completo
    datos/
      tipos.ts          ← modelo: Norma, Seccion, Vinculo, Fuente
      normas.ts         ← registro de normas y sus secciones
      interrelacion.ts  ← correspondencias 27001/27002 ↔ 19011
    contenido/*.html    ← fragmentos verificados, importados con ?raw
    componentes/
    paginas/
```

## Cambiar la paleta

Todos los colores viven en `src/tema/tokens.css`. Ningún otro archivo declara
un hex. Los valores actuales se dedujeron de los estilos computados de
`uao.edu.co` (agosto de 2026), **no de la guía de marca oficial**:

| Token             | Valor     | Contraste sobre blanco |
| ----------------- | --------- | ---------------------- |
| `--uao-vino`      | `#79102D` | 9.8:1 — AAA            |
| `--uao-vino-osc`  | `#700D28` | 11.0:1 — AAA           |
| `--uao-rojo`      | `#E31837` | 4.6:1 — solo acentos   |
| `--uao-crema`     | `#F7F2E9` | fondo                  |
| `--uao-tinta`     | `#1A1A1A` | texto                  |

El rojo nunca se usa para texto corrido porque no alcanza AA en tamaño normal.
Si dispone del manual de identidad, sustituya los hex de ese bloque.

No se utilizan logotipos, escudos ni marcas institucionales.

## Sobre el contenido

`src/contenido/` son los fragmentos HTML del sitio estático anterior, ya
contrastados con la **traducción oficial al español de ISO 19011:2018**
(avalada por el Spanish Translation Task Force del comité ISO/CASCO). Se
importan tal cual con `?raw` en lugar de reescribirlos como JSX, para no
introducir erratas nuevas en un texto ya verificado.

`ContenidoHtml.tsx` reescribe en tiempo de render los `href="*.html"`
heredados a rutas de React Router e intercepta los clics para navegar sin
recargar.

### Advertencia de procedencia

Las referencias a **ISO/IEC 27001:2022** y **27002:2022** no están contrastadas
contra el texto de esas normas. Los documentos disponibles son adopciones
colombianas de ediciones anteriores:

- `GTC-ISO/IEC 27002 (2015)` = ISO/IEC 27002:**2013** → 14 dominios, 114 controles
- `NTC-ISO/IEC 27005 (2009)` = ISO/IEC 27005:**2008**

Ninguno corresponde a 2022. La página `/fuentes` lo declara al lector y el
componente `AvisoFuente` lo muestra en cada página afectada.

## Añadir otra norma

1. Añadir los fragmentos a `src/contenido/`.
2. Registrar la norma y sus secciones en `src/datos/normas.ts`, con su `Fuente`.
3. Añadir los vínculos en `src/datos/interrelacion.ts`.

La página de interrelación y los menús se generan a partir de esos datos.
