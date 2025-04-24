const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Servidor está rodando!!!!!!!!!!!!!!!!");
});

app.listen(5000, () => {
  console.log("Servidor rodando na porta 5000");
});
