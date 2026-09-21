import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';

// Arranque completo. App importa todos los estilos de ArchivoLab.
class PantallaDeError extends React.Component {
  state = { error: false };
  static getDerivedStateFromError() { return { error: true }; }
  componentDidCatch(error) { console.error('Error al iniciar ArchivoLab:', error); }
  render() {
    if (this.state.error) return <main className="oa-startup-error"><h1>No se pudo mostrar el panel</h1><p>Revisa que hayas copiado todos los archivos del paquete. El detalle del error aparece en la consola del navegador.</p><button type="button" onClick={() => window.location.reload()}>Volver a cargar</button></main>;
    return this.props.children;
  }
}

const contenedor = document.getElementById('root');
if (!contenedor) throw new Error('Falta <div id="root"></div> en index.html.');
createRoot(contenedor).render(<StrictMode><PantallaDeError><App /></PantallaDeError></StrictMode>);
