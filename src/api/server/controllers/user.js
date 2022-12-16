import { UserModel } from "../models/users.js";

export const getAllUsers = async (req, res) => {
  const users = await UserModel.findAll();
  return res.send({ users });
};

export const getUserNIF = async (req, res) => {
  const NIF = req.params.NIF;
  const user = await UserModel.findByPk(NIF);
  if (user === null) {
    res.send("Não existe User com NIF: " + NIF);
  }
  res.send({ user });
};

export const newUser = async (req, res) => {
  const newUser = {
    NIF: req.body.NIF,
    idUserCat: req.body.idUserCat,
    nome: req.body.nome,
    username: req.body.username,
    email: req.body.email,
    password: req.body.password,
    telemovel: req.body.telemovel,
    cidade: req.body.cidade,
  };
  await UserModel.create(newUser);

  res.send({ newUser });
};

export const updateUser = async (req, res) => {
  const NIF = req.params.NIF;
  const userUpdated = {
    NIF: req.body.NIF,
    idUserCat: req.body.idUserCat,
    nome: req.body.nome,
    username: req.body.username,
    email: req.body.email,
    password: req.body.password,
    telemovel: req.body.telemovel,
    cidade: req.body.cidade,
  };
  const user = await UserModel.findByPk(NIF);
  if (user !== null) {
    user.update(userUpdated);
    return res.send("User  Updated");
  } else {
    return res.send("Não existe User com NIF: " + NIF);
  }
};

export const deleteUsers = async (req, res) => {
  const NIF = req.params.NIF;
  const user = await UserModel.findByPk(NIF);
  if (user !== null) {
    user.destroy({ where: { NIF: NIF } });
    return res.send("User  Deleted");
  } else {
    return res.send("Não existe User com NIF: " + NIF);
  }
};
