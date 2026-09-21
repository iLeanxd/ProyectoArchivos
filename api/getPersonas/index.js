const sql = require('mssql');

module.exports = async function (context, req) {
    const connectionString = process.env.SQL_CONNECTION_STRING;

    // 1. Diagnóstico de variable de entorno
    if (!connectionString) {
        context.res = {
            status: 200,
            headers: { 'Content-Type': 'application/json; charset=utf-8' },
            body: { 
                estado: "ERROR_CONFIGURACION", 
                detalle: "La variable de entorno SQL_CONNECTION_STRING no se encuentra definida en Azure." 
            }
        };
        return;
    }

    try {
        // 2. Intentar la conexión a Azure SQL
        const pool = await sql.connect(connectionString);
        const result = await pool.request().query('SELECT * FROM Personas ORDER BY Id ASC');
        await pool.close();

        // Respuesta exitosa
        context.res = {
            status: 200,
            headers: { 'Content-Type': 'application/json; charset=utf-8' },
            body: result.recordset
        };
    } catch (err) {
        // 3. Diagnóstico de error de base de datos
        context.res = {
            status: 200,
            headers: { 'Content-Type': 'application/json; charset=utf-8' },
            body: { 
                estado: "ERROR_CONEXION_SQL", 
                mensaje: err.message,
                codigo: err.code || 'SIN_CODIGO'
            }
        };
    }
};