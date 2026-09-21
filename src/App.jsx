import { useState, useEffect } from 'react';
import Home from './pages/Home.jsx';
import Buscador from './components/Buscador.jsx';
import TablaPersonas from './components/TablaPersonas.jsx';
import './styles/main.css';

export default function App() {
  const [personas, setPersonas] = useState([]);
  const [cargando, setCargando] = useState(true);

  // Consulta a Azure SQL pasándole (o no) un parámetro de búsqueda
  const consultarPersonas = (termino = '') => {
    setCargando(true);
    
    // Si hay texto, se adjunta ?q=termino a la URL
    const url = termino.trim()
      ? `/api/getPersonas?q=${encodeURIComponent(termino.trim())}`
      : '/api/getPersonas';

    fetch(url)
      .then((res) => {
        if (!res.ok) throw new Error('Error al conectar con la API');
        return res.json();
      })
      .then((data) => {
        setPersonas(data);
        setCargando(false);
      })
      .catch((err) => {
        console.error('Error cargando personas:', err);
        setPersonas([]);
        setCargando(false);
      });
  };

  // Carga inicial al entrar a la página (primeros 50 registros)
  useEffect(() => {
    consultarPersonas();
  }, []);

  // Evento que se dispara al presionar el botón "Buscar"
  const handleBuscar = (termino) => {
    consultarPersonas(termino);
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