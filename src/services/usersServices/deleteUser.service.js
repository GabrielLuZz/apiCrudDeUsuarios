import users from "../../database/users";

const deleteUserService = (index) => {
  users.splice(index, 1);

  return {
    message: "User deleted with success",
  };
};

export default deleteUserService;
