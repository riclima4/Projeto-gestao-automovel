import Sequelize from "sequelize";
import { dbInstance } from "../config/db.js";

const CarsModel = dbInstance.define("cars", {
  idCarro: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  nome: {
    type: Sequelize.STRING(100),
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  marca: {
    type: Sequelize.STRING(100),
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  modelo: {
    type: Sequelize.STRING(100),
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  matricula: {
    type: Sequelize.STRING(6),
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  motor: {
    type: Sequelize.STRING(50),
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  kilometragem: {
    type: Sequelize.INTEGER(50),
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
});
export { CarsModel };
