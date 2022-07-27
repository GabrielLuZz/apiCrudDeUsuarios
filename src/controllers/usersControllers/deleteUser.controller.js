import deleteUserService from "../../services/usersServices/deleteUser.service";

const deleteUserController = (req, res) => {
  const index = req.index;

  const result = deleteUserService(index);

  res.json(result);
};

export default deleteUserController;
