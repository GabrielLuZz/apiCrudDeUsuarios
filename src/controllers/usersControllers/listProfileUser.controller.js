import listProfileUserService from "../../services/usersServices/listProfileUser.service";

const listProfileUserController = (req, res) => {
  let token = req.headers.authorization;

  if (token.toLowerCase().includes("bearer")) {
    token = token.split(" ")[1];
  }

  const user = listProfileUserService(token);

  res.json(user);
};

export default listProfileUserController;
