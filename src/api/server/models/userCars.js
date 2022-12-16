import { Sequelize } from "sequelize";
import { dbInstance } from "../config/db.js";
import { UserModel } from "./users.js";
import { CarsModel } from "./cars.js";

const UserCars = dbInstance.define(
  "userCars",
  {
    idUserCars: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    //FK idCarro
    idCarro: {
      type: Sequelize.INTEGER,
      primaryKey: false,
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
      primaryKey: false,
      references: {
        model: UserModel,
        key: "NIF",
      },
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
  },
  { timestamps: false }
);
UserCars.hasOne(CarsModel, { foreignKey: "idCarro" });
UserCars.hasOne(UserModel, { foreignKey: "NIF" });
// function initializeUserCars() {
//   // UserModel.belongsToMany(CarsModel, { through: "UserCars" });
//   // CarsModel.belongsToMany(UserModel, { through: "UserCars" });
// }

export { UserCars };
