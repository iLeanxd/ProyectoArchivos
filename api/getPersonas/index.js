module.exports = async function (context, req) {
    context.res = {
        status: 200,
        headers: { 'Content-Type': 'application/json; charset=utf-8' },
        body: [
            { Id: 1, Nombres: "Prueba", Apellidos: "Conexión API OK", DNI: "00000000", NumeroActa: "12345" }
        ]
    };
};