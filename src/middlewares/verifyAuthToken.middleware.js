import jwt from "jsonwebtoken";
import normalizeToken from "../utils/normalizeToken";

const verifyAuthTokenMiddleware = (req, res, next) => {
  let token = normalizeToken(req.headers.authorization);

  if (!token) {
    return res.status(401).json({
      message: "Missing authorization headers",
    });
  }

  jwt.verify(token, "SECRET_KEY", (error, decoded) => {
    if (error) {
      return res.status(401).json("Invalid Token");
    }

    next();
  });
};

export default verifyAuthTokenMiddleware;
