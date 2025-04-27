const { DataTypes } = require("sequelize");
const sequelize = require("../config/sequelize");

const Empresa = sequelize.define(
  "Empresa",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    razao: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true, // Validação para garantir que seja um email válido
      },
    },
    cnpj: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        len: [14, 14], // Validação para garantir tamanho de 14 caracteres (CNPJ)
      },
    },
    senha: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    tableName: "empresas", // Nome da tabela no banco
    timestamps: true, // Adiciona colunas `createdAt` e `updatedAt`
  }
);

module.exports = Empresa;
