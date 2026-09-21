import React from 'react';

// Iconos de la estructura y la navegación de la persona 1.
const trazos = {
  archivo: <><path d="M4 5h6l2 3h8v12H4z" /><path d="M8 12h8M8 16h5" /></>,
  panel: <><rect x="3" y="3" width="7" height="7" rx="1.5" /><rect x="14" y="3" width="7" height="7" rx="1.5" /><rect x="3" y="14" width="7" height="7" rx="1.5" /><rect x="14" y="14" width="7" height="7" rx="1.5" /></>,
  equipo: <><circle cx="9" cy="8" r="3" /><path d="M3 20v-2a6 6 0 0 1 12 0v2M16 5a3 3 0 0 1 0 6M18 14a5 5 0 0 1 3 4v2" /></>,
  libro: <><path d="M12 6v15M3 4h5a4 4 0 0 1 4 2 4 4 0 0 1 4-2h5v15h-5a5 5 0 0 0-4 2 5 5 0 0 0-4-2H3z" /></>,
  datos: <><ellipse cx="12" cy="5" rx="8" ry="3" /><path d="M4 5v14c0 4 16 4 16 0V5M4 12c0 4 16 4 16 0" /></>,
  flecha: <path d="m9 5 7 7-7 7" />,
  arriba: <path d="M5 16 17 4M6 4h11v11" />,
};

export default function Icono({ nombre, className = '' }) {
  return <svg className={`oa-icon ${className}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{trazos[nombre] ?? trazos.archivo}</svg>;
}
