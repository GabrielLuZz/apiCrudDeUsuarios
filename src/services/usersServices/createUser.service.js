import users from "../../database/users";
import { v4 as uuidV4 } from "uuid";
import * as bcrypt from "bcrypt";

const createUserService = async (name, email, password, isAdm) => {
  const hashedPassword = await bcrypt.hash(password, 10);

  const newUser = {
    name,
    email,
    uuid: uuidV4(),
    isAdm,
    createdOn: new Date().toISOString(),
    updatedOn: new Date().toISOString(),
  };

  users.push({ ...newUser, password: hashedPassword });

  return newUser;
};

export default createUserService;
