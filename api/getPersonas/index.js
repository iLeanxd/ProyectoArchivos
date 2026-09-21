const sql = require('mssql');

module.exports = async function (context, req) {
    const connectionString = process.env.SQL_CONNECTION_STRING;

    if (!connectionString) {
        context.res = {
            status: 500,
            headers: { 'Content-Type': 'application/json; charset=utf-8' },
            body: { error: 'La variable SQL_CONNECTION_STRING no está configurada.' }
        };
        return;
    }

    // Recibir término de búsqueda si viene desde la UI (?q=12345678)
    const search = req.query.q || req.query.search || '';
    let pool;

    try {
        pool = await sql.connect(connectionString);
        const request = pool.request();

        let queryStr = `SELECT TOP 50 NumeroActa, DNI, Nombres, Apellidos, FechaNacimiento, LugarNacimiento FROM Personas`;

        // Si el usuario escribió un filtro en el buscador de la web
        if (search.trim() !== '') {
            request.input('searchParam', sql.VarChar, `%${search.trim()}%`);
            queryStr = `SELECT TOP 50 NumeroActa, DNI, Nombres, Apellidos, FechaNacimiento, LugarNacimiento 
                        FROM Personas 
                        WHERE DNI LIKE @searchParam 
                           OR NumeroActa LIKE @searchParam 
                           OR Nombres LIKE @searchParam 
                           OR Apellidos LIKE @searchParam`;
        }

        const result = await request.query(queryStr);

        context.res = {
            status: 200,
            headers: { 'Content-Type': 'application/json; charset=utf-8' },
            body: result.recordset
        };
    } catch (err) {
        context.res = {
            status: 500,
            headers: { 'Content-Type': 'application/json; charset=utf-8' },
            body: { error: 'Error al consultar Azure SQL', details: err.message }
        };
    } finally {
        if (pool) {
            try {
                await pool.close();
            } catch (e) {
                // Previene excepciones no controladas al cerrar el pool
            }
        }
    }
};