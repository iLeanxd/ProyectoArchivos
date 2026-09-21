import React from 'react';
import Navbar from '../components/Navbar.jsx';
import Icono from '../components/Icono.jsx';

const integrantes = [
  { apellidos: 'Burgos Mendoza', nombres: 'Cristian Albert' },
  { apellidos: 'Benites Alejandria', nombres: 'Cesar Leandro' },
  { apellidos: 'Carranza Vargas', nombres: 'Kevin Alexis' },
  { apellidos: 'Castillo Cisneros', nombres: 'Kiara Marley' },
  { apellidos: 'Julca Davila', nombres: 'Ricky Gilbert' },
  { apellidos: 'Silvestre Ferrer', nombres: 'Jeffran Alberto' },
];

// PERSONA 1: identidad visual, estructura e integración.
// Las props conservan el acuerdo de la entrega anterior.
// No se implementan buscador, tabla, formularios ni operaciones sobre registros.
export default function Home({ buscador, tablaPersonas, formularioPersona, modalEditar }) {
  return (
    <div className="oa-app" id="inicio">
      <a className="oa-skip" href="#contenido">Saltar al contenido</a>
      <Navbar />
      <main id="contenido" className="oa-container" tabIndex={-1}>
        <section className="oa-hero" aria-labelledby="oa-title">
          <div className="oa-hero-copy">
            <p className="oa-kicker"><span className="oa-kicker-square" /> PROYECTO OG.ARCHIVOS <span className="oa-kicker-divider">/</span> UNT</p>
            <h1 id="oa-title">Organización<br /><em>de archivos.</em></h1>
          </div>

          {/* Ilustración decorativa hecha con CSS. No representa una tabla de datos. */}
          <div className="oa-archive-art" aria-hidden="true">
            <span className="oa-art-label">ESTUDIO DE REGISTROS / OA</span>
            <div className="oa-art-orbit" />
            <div className="oa-file oa-file-back"><span className="oa-file-tab">ARCHIVO</span></div>
            <div className="oa-file oa-file-middle"><span className="oa-file-tab">ÍNDICE</span><span className="oa-file-range">A—Z</span></div>
            <div className="oa-file oa-file-front">
              <span className="oa-file-tab">PERSONAS</span>
              <div className="oa-file-top"><span>ARCHIVOLAB</span><span>OA / 01</span></div>
              <div className="oa-file-title">Nombres<br /><i>&</i> apellidos<span>.</span></div>
              <div className="oa-file-bottom"><span>EL ORDEN COMIENZA AQUÍ</span><span className="oa-barcode" /></div>
            </div>
            <span className="oa-art-footnote">INFORMACIÓN CON ESTRUCTURA.</span>
          </div>
        </section>

        <div className="oa-project-facts" aria-label="Información del curso">
          <div><span>CURSO</span><strong>Organización de Archivos</strong></div>
          <div><span>DOCENTE</span><strong>Max Castro</strong></div>
          <div><span>UNIVERSIDAD</span><strong>Universidad Nacional de Trujillo</strong></div>
          <a href="#equipo" className="oa-team-shortcut"><span>EQUIPO DE TRABAJO</span><strong>06 integrantes <Icono nombre="arriba" /></strong></a>
        </div>

        <section className="oa-laboratory" id="registros" aria-labelledby="oa-lab-title">
          <div className="oa-section-heading"><h2 id="oa-lab-title">Mesa de trabajo<span>.</span></h2><p></p></div>
          <div className="oa-workspace-grid">
            <section className="oa-module oa-query-module" aria-labelledby="oa-query-title">
              <header className="oa-module-heading"><div><span className="oa-module-number">A</span><h3 id="oa-query-title">Consulta de personas</h3></div><span className="oa-owner">PERSONA 2</span></header>
              <div className="oa-module-body">
                {/* PERSONA 2: integrar su componente Buscador en este espacio. */}
                <div className="oa-slot">{buscador ?? <EspacioDeIntegracion numero="01" titulo="Buscador" />}</div>
                {/* PERSONA 2: integrar su TablaPersonas con las props acordadas. */}
                <div className="oa-slot">{tablaPersonas ?? <EspacioDeIntegracion numero="02" titulo="Tabla de personas" amplio />}</div>
              </div>
            </section>
            <section className="oa-module oa-entry-module" aria-labelledby="oa-entry-title">
              <header className="oa-module-heading"><div><span className="oa-module-number">B</span><h3 id="oa-entry-title">Registro de personas</h3></div><span className="oa-owner">PERSONA 3</span></header>
              <div className="oa-module-body oa-form-area">
                {/* PERSONA 3: integrar su FormularioPersona en este espacio. */}
                {formularioPersona ?? <EspacioDeIntegracion numero="03" titulo="Formulario de registro" amplio />}
              </div>
            </section>
          </div>
          <p className="oa-integration-note"><span /> Áreas reservadas para los componentes del equipo.</p>
          {/* PERSONA 3: integrar su ModalEditar cuando esté disponible. */}
          {modalEditar}
        </section>

        <section className="oa-team-section" id="equipo" aria-labelledby="oa-team-title">
          <p className="oa-section-index">02 / EQUIPO DE TRABAJO</p>
          <div className="oa-team-heading"><h2 id="oa-team-title">Seis personas.<br /><em>Un mismo proyecto.</em></h2><div className="oa-teacher-note"><span>BAJO LA DIRECCIÓN DEL DOCENTE</span><strong>Max Castro</strong></div></div>
          <ol className="oa-team-grid" aria-label="Integrantes del proyecto">
            {integrantes.map((persona, indice) => (
              <li className="oa-member" key={persona.apellidos}>
                <span className="oa-member-index" aria-hidden="true">0{indice + 1}</span>
                <div><h3>{persona.apellidos}</h3><p>{persona.nombres}</p></div>
                <span className="oa-member-marker" aria-hidden="true" />
              </li>
            ))}
          </ol>
        </section>

        <section className="oa-project" id="proyecto" aria-labelledby="oa-project-title">
          <div className="oa-project-left"><p className="oa-section-index">03 / EL PROYECTO</p><h2 id="oa-project-title">Del registro<br /><em>a la consulta.</em></h2></div>
          <div className="oa-project-right"><span className="oa-project-symbol" aria-hidden="true">[ SQL ]</span><p>Proyecto para consulta de Nombres y Apellidos.</p><p className="oa-project-secondary">La estructura visual reúne los componentes del equipo para su posterior conexión con SQL.</p><span className="oa-project-label">ORGANIZACIÓN DE ARCHIVOS · UNT</span></div>
        </section>
      </main>
      <footer className="oa-footer oa-container"><a className="oa-footer-brand" href="#inicio">ProyectoDeUnidad<span>.</span></a><span>Proyecto académico / Universidad Nacional de Trujillo</span><a className="oa-back-to-top" href="#inicio">Volver al inicio <Icono nombre="arriba" /></a></footer>
    </div>
  );
}

// Estas áreas son contenedores visuales, sin datos ni controles de los compañeros.
function EspacioDeIntegracion({ numero, titulo, amplio = false }) {
  return <div className={`oa-reserved${amplio ? ' oa-reserved-large' : ''}`}><span className="oa-slot-reference">ESPACIO {numero}</span><strong>{titulo}</strong><span className="oa-slot-pending">Pendiente de integración</span><span className="oa-slot-corner" aria-hidden="true" /></div>;
}
