import users from "../database/users";

import * as bcrypt from "bcrypt";

const verifyLoginCredentialsMiddleware = (req, res, next) => {
  const { email, password } = req.body;

  const user = users.find((user) => user.email === email);

  if (!user) {
    return res.status(401).json({
      message: "Wrong email/password",
    });
  }

  const passwordMatch = bcrypt.compareSync(password, user.password);

  if (!passwordMatch) {
    return res.status(401).json({
      message: "Wrong email/password",
    });
  }

  next();
};

export default verifyLoginCredentialsMiddleware;
