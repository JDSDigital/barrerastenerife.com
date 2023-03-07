export const createTemplate = ({
  name,
  email,
  message,
}: {
  name: string;
  email: string;
  message: string;
}) => {
  return `
<html lang="es">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width" />
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
    <title>Barreras Tenerife</title>
  </head>
  <body bgcolor="#eee" style="background-color: #eee !important">
    <div
      bgcolor="#eee"
      style="
        background-color: #eee !important;
        padding: 50px 0;
        font-family: 'Roboto', 'Helvetica', 'Arial', sans-serif;
      "
    >
      <h2 style="width: 600px; margin: 0 auto">Nuevo mensaje desde la página web</h2>

      <div
        style="
          background-color: white;
          color: #555;
          font-size: 16px;
          font-weight: 400;
          width: 560px;
          text-align: left;
          margin: 15px auto;
          padding: 20px;
          border-radius: 5px;
        "
      >
        <p>Detalles</p>

        <div style="background-color: #eee; color: black; padding: 1px 6px; border-radius: 5px">
          <p>Nombre: ${name}</p>
          <p>Correo: ${email}</p>
          <p>Mensaje: ${message}</p>
        </div>

    </div>
  </body>
</html>
    `;
};
