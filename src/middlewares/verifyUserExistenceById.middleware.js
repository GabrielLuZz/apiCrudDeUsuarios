import users from "../database/users";

const verifyUserExistenceByIdMiddleware = (req, res, next) => {
  const { uuid } = req.params;

  const index = users.findIndex((user) => user.uuid === uuid);

  if (index === -1) {
    return res.status(404).json({ message: "User not found" });
  }

  req.index = index;
  req.uuid = uuid;
  next();
};

export default verifyUserExistenceByIdMiddleware;
