import updateUserService from "../../services/usersServices/updateUser.service";

const updateUserController = async (req, res) => {
  const newUser = req.body;
  const index = req.index;
  const uuid = req.uuid;

  newUser.uuid = uuid;

  const user = await updateUserService(newUser, index);

  res.json(user);
};

export default updateUserController;
