import { IntervencaoModel } from "../models/intervencao.js";

export const getAllIntervencao = async (req, res) => {
  const Intervencao = await IntervencaoModel.findAll();
  return res.send({ Intervencao });
};
