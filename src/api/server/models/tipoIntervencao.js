import Sequelize from "sequelize";
import { dbInstance } from "../config/db.js";

const TipoIntervencaoModel = dbInstance.define("TipoIntervencao", {
  idTipoIntervencao: {
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
});
export { TipoIntervencaoModel };
