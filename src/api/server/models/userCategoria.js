import Sequelize from "sequelize";
import { dbInstance } from "../config/db.js";

const UserCatModel = dbInstance.define("userCat", {
  idUserCat: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  categoria: {
    type: Sequelize.STRING(50),
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
});
export { UserCatModel };
