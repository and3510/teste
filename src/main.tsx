import React, { useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';

const rootElement = document.getElementById('root');

if (rootElement) {
  ReactDOM.createRoot(rootElement).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
} else {
  console.error('Elemento root não encontrado!');
}

useEffect(() => {
  // Preconnect to fonts.gstatic.com
  const link1 = document.createElement('link');
  link1.rel = 'preconnect';
  link1.href = 'https://fonts.gstatic.com';
  document.head.appendChild(link1);

  // Google Fonts: Josefin Sans
  const link2 = document.createElement('link');
  link2.rel = 'stylesheet';
  link2.href =
    'https://fonts.googleapis.com/css2?family=Josefin+Sans:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;1,100;1,200;1,300;1,400;1,500;1,600;1,700&display=swap';
  document.head.appendChild(link2);

  // Font Awesome
  const link3 = document.createElement('link');
  link3.rel = 'stylesheet';
  link3.href =
    'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.2/css/all.min.css';
  link3.integrity =
    'sha512-HK5fgLBL+xu6dm/Ii3z4xhlSUyZgTT9tuc/hSrtw6uzJOvgRr2a9jyxxT1ely+B+xFAmJKVSTbpM/CuL7qxO8w==';
  link3.crossOrigin = 'anonymous';
  document.head.appendChild(link3);

  // Estilos personalizados
  const link4 = document.createElement('link');
  link4.rel = 'stylesheet';
  link4.href = 'css/styles.css';
  document.head.appendChild(link4);

  return () => {
    // Limpeza (remover os links quando o componente for desmontado)
    document.head.removeChild(link1);
    document.head.removeChild(link2);
    document.head.removeChild(link3);
    document.head.removeChild(link4);
  };
}, []);
