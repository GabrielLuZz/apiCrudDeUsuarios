import userLoginService from "../../services/usersServices/userLogin.service";

const userLoginController = (req, res) => {
  const { email } = req.body;

  const result = userLoginService(email);

  res.json(result);
};

export default userLoginController;
