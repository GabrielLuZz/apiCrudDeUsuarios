import express from "express";
import path from "path";
import dotenv from "dotenv";
import cors from "cors";
import verifyLoginCredentialsMiddleware from "./middlewares/verifyLoginCredentials.middleware";
import userLoginController from "./controllers/usersControllers/userLogin.controller";

import usersRoutes from "./routes/users.routes";

dotenv.config();

const server = express();

server.use(express.json());
server.use(express.static(path.join(__dirname, "../public")));
server.use(cors());
server.use(express.urlencoded({ extended: true }));

server.use("/users", usersRoutes);
server.use("/login", verifyLoginCredentialsMiddleware, userLoginController);

server.use((req, res) => {
  res.status(404);
  res.json({ error: "Endpoint não encontrado" });
});

server.listen(process.env.PORT);

export default server;
