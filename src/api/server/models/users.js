import Sequelize from "sequelize";
import { dbInstance } from "../config/db.js";
import { UserCatModel } from "./userCategoria.js";

const UserModel = dbInstance.define("users", {
  NIF: {
    type: Sequelize.INTEGER(9),
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  idUserCat: {
    type: Sequelize.INTEGER,
    references: {
      model: UserCatModel,
      key: "idUserCat",
    },
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  nome: {
    type: Sequelize.STRING(50),
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  username: {
    type: Sequelize.STRING(50),
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  email: {
    type: Sequelize.STRING(100),
    allowNull: false,
    validate: {
      notEmpty: true,
      isEmail: true,
    },
  },
  password: {
    type: Sequelize.STRING(50),
    allowNull: false,
    validate: {
      notEmpty: true,
      min: 8,
    },
  },
  telemovel: {
    type: Sequelize.INTEGER(9),
    allowNull: false,
    validate: {
      notEmpty: true,
      min: 9,
      max: 9,
    },
  },
  cidade: {
    type: Sequelize.STRING(50),
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
});
UserModel.belongsTo(UserCatModel, { foreignKey: "idUserCat" });
UserCatModel.hasMany(UserModel);
export { UserModel };