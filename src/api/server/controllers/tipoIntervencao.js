import { TipoIntervencaoModel } from "../models/tipoIntervencao.js";

export const getAllTipoIntervencao = async (req, res) => {
  const tipoIntervencao = await TipoIntervencaoModel.findAll();
  return res.send({ tipoIntervencao });
};
