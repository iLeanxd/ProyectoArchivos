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

    let pool;
    try {
        pool = await sql.connect(connectionString);
        const result = await pool.request().query('SELECT * FROM Personas ORDER BY Id ASC');

        context.res = {
            status: 200,
            headers: { 'Content-Type': 'application/json; charset=utf-8' },
            body: result.recordset
        };
    } catch (err) {
        context.res = {
            status: 500,
            headers: { 'Content-Type': 'application/json; charset=utf-8' },
            body: { error: 'Error al conectar con Azure SQL', details: err.message }
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