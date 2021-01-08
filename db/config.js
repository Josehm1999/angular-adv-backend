const mongoose = require("mongoose");
require('dotenv').config();
const db_connection = async () => {
  try {
    await mongoose.connect(
      process.env.DB_CS,
      { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true }
    );
    console.log("DB funciona correctamente");
  } catch (error) {
    console.log(error);
    throw new Error("Error a la hora de conectar a la BD");
  }
};

module.exports = {
    db_connection
}