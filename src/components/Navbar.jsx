import React from 'react';

// PERSONA 1: navegación de la página. Todos los enlaces llevan a secciones.
export default function Navbar() {
  return (
    <header className="oa-header">
      <div className="oa-container oa-header-inner">
        <a className="oa-brand" href="#inicio" aria-label="ArchivoLab, inicio">
          <span className="oa-brand-mark" aria-hidden="true">a<span>.</span></span>
          <span>Proyecto1eraUnidad<span className="oa-brand-period">.</span><small>ORGANIZACIÓN DE ARCHIVOS</small></span>
        </a>
        <nav className="oa-navigation" aria-label="Navegación principal">
          <a href="#registros"><span>01</span> PROYECTO</a>
          <a href="#equipo"><span>02</span> INTEGRANTES</a>
        </nav>
        <span className="oa-university-mark">Universidad Nacional de Trujillo<span>Sabado 9 de septiembre del 2026</span></span>
      </div>
    </header>
  );
}
