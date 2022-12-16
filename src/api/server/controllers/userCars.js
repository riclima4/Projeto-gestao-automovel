import { UserCars } from "../models/userCars.js";

export const getAllUserCars = async (req, res) => {
  const usercars = await UserCars.findAll();
  return res.send({ usercars });
};
