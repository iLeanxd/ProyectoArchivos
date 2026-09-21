import { useState } from 'react';
import Home from './pages/Home.jsx';
import Buscador from './components/Buscador.jsx';
import TablaPersonas from './components/TablaPersonas.jsx';
import './styles/main.css';

const integrantes = [
  { apellidos: 'Burgos Mendoza', nombres: 'Cristian Albert', dni: '', numeroActa: '' },
  { apellidos: 'Benites Alejandria', nombres: 'Cesar Leandro', dni: '', numeroActa: '' },
  { apellidos: 'Carranza Vargas', nombres: 'Kevin Alexis', dni: '', numeroActa: '' },
  { apellidos: 'Castillo Cisneros', nombres: 'Kiara Marley', dni: '', numeroActa: '' },
  { apellidos: 'Julca Davila', nombres: 'Ricky Gilbert', dni: '', numeroActa: '' },
  { apellidos: 'Silvestre Ferrer', nombres: 'Jeffran Alberto', dni: '', numeroActa: '' },
];

export default function App() {
  const [personas, setPersonas] = useState(integrantes);

  const handleBuscar = (termino) => {
    const texto = termino.trim().toLowerCase();

    if (!texto) {
      setPersonas(integrantes);
      return;
    }

   const resultados = integrantes.filter((persona) =>
  `${persona.nombres} ${persona.apellidos} ${persona.dni} ${persona.numeroActa}`
    .toLowerCase()
    .includes(texto)
);

    setPersonas(resultados);
  };

  return (
    <Home
      buscador={<Buscador onBuscar={handleBuscar} />}
      tablaPersonas={<TablaPersonas personas={personas} />}
    />
  );
}
