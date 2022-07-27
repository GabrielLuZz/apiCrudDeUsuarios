import { Router } from "express";

import createUserController from "../controllers/usersControllers/createUser.controller";
import deleteUserController from "../controllers/usersControllers/deleteUser.controller";
import listUsersController from "../controllers/usersControllers/listUsers.controller";
import updateUserController from "../controllers/usersControllers/updateUser.controller";
import verifyEmailAvailabilityMiddleware from "../middlewares/verifyEmailAvailability.middleware";
import verifyUserExistenceByIdMiddleware from "../middlewares/verifyUserExistenceById.middleware";
import verifyAuthTokenMiddleware from "../middlewares/verifyAuthToken.middleware";
import listProfileUserController from "../controllers/usersControllers/listProfileUser.controller";
import verifyIsAdmMiddleware from "../middlewares/verifyIsAdm.middleware";
import verifyUserPermissionMiddleware from "../middlewares/verifyUserPermission.middleware";

const router = Router();

router.get("/profile", verifyAuthTokenMiddleware, listProfileUserController);
router.get(
  "",
  verifyAuthTokenMiddleware,
  verifyIsAdmMiddleware,
  listUsersController
);
router.post("", verifyEmailAvailabilityMiddleware, createUserController);
router.patch(
  "/:uuid",
  verifyAuthTokenMiddleware,
  verifyUserExistenceByIdMiddleware,
  verifyUserPermissionMiddleware,
  updateUserController
);
router.delete(
  "/:uuid",
  verifyAuthTokenMiddleware,
  verifyUserExistenceByIdMiddleware,
  verifyUserPermissionMiddleware,
  deleteUserController
);

export default router;
