require("dotenv").config();
const express = require("express");
const { db_connection } = require("./db/config");
const cors = require("cors");
const app = express();

//Configuración cors
app.use(cors());
//Base de datos
db_connection();

//rutas
app.get("/", (req, res) => {
  res.json({
    ok: true,
    msg: "Hola Mundo",
  });
});
app.listen(process.env.PORT, () => {
  console.log("Servidor corriendo en puerto " + 3000);
});
