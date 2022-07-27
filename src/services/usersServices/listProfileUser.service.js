import users from "../../database/users";
import jwt from "jsonwebtoken";

const listProfileUserService = (token) => {
  const uuidToken = jwt.decode(token).uuid;

  const { name, email, uuid, isAdm, createdOn, updatedOn } = users.find(
    (user) => user.uuid === uuidToken
  );

  return { name, email, uuid, isAdm, createdOn, updatedOn };
};

export default listProfileUserService;
