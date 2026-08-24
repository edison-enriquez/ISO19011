import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './tema/global.css';

// BrowserRouter y no HashRouter: el contenido usa anclas internas de forma
// intensiva (#a6, #fase-3, los índices laterales de cada página). Con
// HashRouter el router interpretaría cada ancla como una ruta y la navegación
// dentro de la página quedaría rota.
//
// A cambio, el alojamiento estático necesita reescribir cualquier ruta al
// index.html. Véase la sección "Despliegue" del README.
// basename se toma de la base de Vite: '/' en local, '/<repo>/' en GitHub
// Pages. Se le quita la barra final porque React Router la añade él.
const basename = import.meta.env.BASE_URL.replace(/\/$/, '');

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter basename={basename}>
      <App />
    </BrowserRouter>
  </StrictMode>,
);
