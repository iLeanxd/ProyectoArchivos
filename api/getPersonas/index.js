module.exports = async function (context, req) {
    // 1. Cargar la librería de forma segura
    let sql;
    try {
        sql = require('mssql');
    } catch (libError) {
        context.res = {
            status: 200,
            headers: { 'Content-Type': 'application/json; charset=utf-8' },
            body: { 
                estado: "ERROR_LIBRERIA", 
                detalle: "La librería mssql no está instalada correctamente en el servidor de Azure.",
                mensaje: libError.message 
            }
        };
        return;
    }

    // 2. Verificar la variable de entorno
    const connectionString = process.env.SQL_CONNECTION_STRING;
    if (!connectionString) {
        context.res = {
            status: 200,
            headers: { 'Content-Type': 'application/json; charset=utf-8' },
            body: { 
                estado: "ERROR_CONFIGURACION", 
                detalle: "La variable de entorno SQL_CONNECTION_STRING no está configurada en Azure." 
            }
        };
        return;
    }

    // 3. Conexión a la base de datos
    try {
        const pool = await sql.connect(connectionString);
        const result = await pool.request().query('SELECT * FROM Personas ORDER BY Id ASC');
        await pool.close();

        context.res = {
            status: 200,
            headers: { 'Content-Type': 'application/json; charset=utf-8' },
            body: result.recordset
        };
    } catch (err) {
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