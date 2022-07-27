import users from "../../database/users";
import * as bcrypt from "bcrypt";

const updateUserService = async (newUser, index) => {
  // const password = await bcrypt.hash(newUser.password, 10);
  // newUser.password = password;
  newUser.updateOn = new Date().toISOString();
  newUser.isAdm = users[index].isAdm;
  users[index] = { ...users[index], ...newUser };
  const { email, isAdm, name, createdOn, updatedOn, uuid } = users[index];

  return { email, isAdm, name, createdOn, updatedOn, uuid };
};

export default updateUserService;
