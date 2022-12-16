import { Sequelize } from "sequelize";
import { dbInstance } from "../config/db.js";
import { UserModel } from "./users.js";
import { CarsModel } from "./cars.js";

const UserCars = dbInstance.define("userCars", {
  //FK idCarro
  idCarro: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    references: {
      model: CarsModel,
      key: "idCarro",
    },
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  //FK NIF
  NIF: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    references: {
      model: UserModel,
      key: "NIF",
    },
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
});
UserCars.hasOne(CarsModel, { foreignKey: "idCarro" });
UserCars.hasOne(UserModel, { foreignKey: "NIF" });
UserModel.belongsToMany(CarsModel, { through: "UserCars" });
CarsModel.belongsToMany(UserModel, { through: "UserCars" });
export { UserCars };
