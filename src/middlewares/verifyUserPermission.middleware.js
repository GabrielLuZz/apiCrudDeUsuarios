import jwt from "jsonwebtoken";
import users from "../database/users";
import normalizeToken from "../utils/normalizeToken";

const verifyUserPermissionMiddleware = (req, res, next) => {
  let token = normalizeToken(req.headers.authorization);
  const index = req.index;

  const { uuid: uuidToken, isAdm } = jwt.decode(token);

  if (!isAdm && uuidToken !== users[index].uuid) {
    return res.status(401).json({
      message: "Missing admin permissions",
    });
  }

  next();
};

export default verifyUserPermissionMiddleware;
