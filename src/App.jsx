import { useState, useEffect } from 'react';
import Home from './pages/Home.jsx';
import Buscador from './components/Buscador.jsx';
import TablaPersonas from './components/TablaPersonas.jsx';
import './styles/main.css';

export default function App() {
  const [todasLasPersonas, setTodasLasPersonas] = useState([]);
  const [personas, setPersonas] = useState([]);
  const [cargando, setCargando] = useState(true);

  // Obtener los datos reales desde Azure SQL
  useEffect(() => {
    fetch('/api/getPersonas')
      .then((res) => {
        if (!res.ok) throw new Error('Error al conectar con la API');
        return res.json();
      })
      .then((data) => {
        setTodasLasPersonas(data);
        setPersonas(data);
        setCargando(false);
      })
      .catch((err) => {
        console.error('Error cargando personas:', err);
        setCargando(false);
      });
  }, []);

  // Función de búsqueda sobre los datos de Azure
  const handleBuscar = (termino) => {
    const texto = termino.trim().toLowerCase();

    if (!texto) {
      setPersonas(todasLasPersonas);
      return;
    }

    const resultados = todasLasPersonas.filter((persona) => {
      const nombres = persona.Nombres || persona.nombres || '';
      const apellidos = persona.Apellidos || persona.apellidos || '';
      const dni = persona.DNI || persona.dni || '';
      const numeroActa = persona.NumeroActa || persona.numeroActa || '';

      return `${nombres} ${apellidos} ${dni} ${numeroActa}`
        .toLowerCase()
        .includes(texto);
    });

    setPersonas(resultados);
  };

  return (
    <Home
      buscador={<Buscador onBuscar={handleBuscar} />}
      tablaPersonas={
        cargando ? (
          <p style={{ padding: '1rem' }}>⏳ Cargando actas desde Azure SQL...</p>
        ) : (
          <TablaPersonas personas={personas} />
        )
      }
    />
  );
}