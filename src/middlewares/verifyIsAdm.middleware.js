import jwt from "jsonwebtoken";
import normalizeToken from "../utils/normalizeToken";

const verifyIsAdmMiddleware = (req, res, next) => {
  let token = normalizeToken(req.headers.authorization);

  jwt.verify(token, "SECRET_KEY", (error, decoded) => {
    if (error) {
      return res.status(401).json({
        message: "Invalid Token",
      });
    }

    if (!decoded.isAdm) {
      return res.status(401).json({
        message: "Unauthorized",
      });
    }

    next();
  });
};

export default verifyIsAdmMiddleware;
