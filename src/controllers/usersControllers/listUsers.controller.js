import listUsersService from "../../services/usersServices/listUsers.service";

const listUsersController = (req, res) => {
  const users = listUsersService();

  res.json(users);
};

export default listUsersController;
