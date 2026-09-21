const sql = require('mssql');

module.exports = async function (context, req) {
    const connectionString = process.env.SQL_CONNECTION_STRING;

    if (!connectionString) {
        context.res = {
            status: 500,
            headers: { 'Content-Type': 'application/json' },
            body: { error: 'La variable SQL_CONNECTION_STRING no está configurada en Azure.' }
        };
        return;
    }

    let pool;
    try {
        // Conexión a la base de datos
        pool = await sql.connect(connectionString);

        // Consulta a la tabla Personas
        const result = await pool.request().query('SELECT * FROM Personas ORDER BY Id ASC');

        context.res = {
            status: 200,
            headers: { 'Content-Type': 'application/json' },
            body: result.recordset
        };
    } catch (err) {
        // Devuelve el mensaje de error visible en pantalla
        context.res = {
            status: 500,
            headers: { 'Content-Type': 'application/json' },
            body: { error: 'Error al conectar a Azure SQL', details: err.message }
        };
    } finally {
        if (pool) {
            await pool.close();
        }
    }
};