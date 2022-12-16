import Sequelize from "sequelize";
import { dbInstance } from "../config/db.js";
import { TipoIntervencaoModel } from "./tipoIntervencao.js";
import { CarsModel } from "./cars.js";
import { UserModel } from "./users.js";

const IntervencaoModel = dbInstance.define("intervencao", {
  idIntervencao: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  // //FK idTipoIntervencao
  idTipoIntervencao: {
    type: Sequelize.INTEGER,
    references: {
      model: TipoIntervencaoModel,
      key: "idTipoIntervencao",
    },
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  //FK idCarro
  idCarro: {
    type: Sequelize.INTEGER,
    references: {
      model: CarsModel,
      key: "idCarro",
    },
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  // //FK NIF
  NIF: {
    type: Sequelize.INTEGER(9),
    references: {
      model: UserModel,
      key: "NIF",
    },
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  data: {
    type: Sequelize.DATEONLY,
  },
  kilometragem: {
    type: Sequelize.INTEGER(50),
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
});
IntervencaoModel.belongsTo(TipoIntervencaoModel, {
  foreignKey: "idTipoIntervencao",
});
IntervencaoModel.belongsTo(CarsModel, {
  foreignKey: "idCarro",
});
IntervencaoModel.hasOne(UserModel, {
  foreignKey: "NIF",
});
// // TipoIntervencaoModel.hasMany(IntervencaoModel);
// CarsModel.hasMany(IntervencaoModel);
// UserModel.hasMany(IntervencaoModel);
export { IntervencaoModel };
