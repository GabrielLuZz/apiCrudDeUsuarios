import jwt from "jsonwebtoken";
import users from "../../database/users";

const userLoginService = (email) => {
  const { uuid, isAdm } = users.find((user) => user.email === email);
  const token = jwt.sign({ email, uuid, isAdm }, "SECRET_KEY", {
    expiresIn: "24h",
  });

  return {
    token,
  };
};

export default userLoginService;
