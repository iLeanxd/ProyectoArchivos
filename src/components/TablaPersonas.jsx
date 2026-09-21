export default function TablaPersonas({ personas = [] }) {
  return (
    <div className="p2-table-wrapper">
      <table className="p2-table">
        <thead>
          <tr>
            <th>Apellidos</th>
            <th>Nombres</th>
            <th>DNI</th>
            <th>Número de acta</th>
          </tr>
        </thead>

        <tbody>
          {personas.length > 0 ? (
            personas.map((persona, index) => (
              <tr key={persona.Id || index}>
                <td>{persona.Apellidos || persona.apellidos}</td>
                <td>{persona.Nombres || persona.nombres}</td>
                <td>{persona.DNI || persona.dni}</td>
                <td>{persona.NumeroActa || persona.numeroActa}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="4">No se encontraron personas.</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}