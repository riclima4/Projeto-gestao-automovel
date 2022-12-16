import { CarsModel } from "../models/cars.js";

export const getAllcars = async (req, res) => {
  const cars = await CarsModel.findAll();
  return res.send({ cars });
};
