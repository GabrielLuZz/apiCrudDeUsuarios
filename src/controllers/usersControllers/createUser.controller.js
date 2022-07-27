import createUserService from "../../services/usersServices/createUser.service";

const createUserController = async (req, res) => {
  const { name, email, password, isAdm } = req.body;

  const newUser = await createUserService(name, email, password, isAdm);

  res.status(201).json(newUser);
};

export default createUserController;
