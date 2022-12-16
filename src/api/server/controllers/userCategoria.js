import { UserCatModel } from "../models/userCategoria.js";

export const getAllUsersCat = async (req, res) => {
  const usersCat = await UserCatModel.findAll();
  return res.send({ usersCat });
};

export const getUserCat = async (req, res) => {
  const idUserCat = req.params.idUserCat;
  const userCat = await UserCatModel.findByPk(idUserCat);
  if (userCat === null) {
    res.send("Não existe User com NIF: " + idUserCat);
  }
  res.send({ userCat });
};

export const newUserCat = async (req, res) => {
  const newUserCat = {
    idUserCat: req.body.idUserCat,
    categoria: req.body.categoria,
  };
  await UserCatModel.create(newUserCat);

  res.send({ newUserCat });
};

export const updateUserCat = async (req, res) => {
  const idUserCat = req.params.idUserCat;
  const userCatUpdated = {
    idUserCat: req.body.idUserCat,
    categoria: req.body.categoria,
  };
  const user = await UserCatModel.findByPk(idUserCat);
  if (user !== null) {
    user.update(userCatUpdated);
    return res.send("User  UpdatedCat");
  } else {
    return res.send("Não existe User com idUserCat: " + idUserCat);
  }
};

export const deleteUsersCat = async (req, res) => {
  const idUserCat = req.params.idUserCat;
  const userCat = await UserCatModel.findByPk(idUserCat);
  if (userCat !== null) {
    userCat.destroy({ where: { userCat: userCat } });
    return res.send("User Categoria Deleted");
  } else {
    return res.send("Não existe User Categoria com idUserCat: " + idUserCat);
  }
};
