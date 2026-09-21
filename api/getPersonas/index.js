const sql = require('mssql');

module.exports = async function (context, req) {
    const connectionString = process.env.SQL_CONNECTION_STRING;

    try {
        // Conectar a la base de datos
        await sql.connect(connectionString);

        // Ejecutar la consulta a la tabla Personas
        const result = await sql.query`SELECT * FROM Personas ORDER BY Id ASC`;

        // Responder con los datos en formato JSON
        context.res = {
            status: 200,
            headers: {
                'Content-Type': 'application/json'
            },
            body: result.recordset
        };
    } catch (err) {
        context.res = {
            status: 500,
            body: { error: 'Error al consultar la base de datos', details: err.message }
        };
    } finally {
        await sql.close();
    }
};