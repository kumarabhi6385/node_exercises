import UserController from "./userController.js";

const routes = (app) => {
  const controller = new UserController();
  app
    .route("/auth/register")
    // Below API is used for registration purpose
    .post(controller.register);

  app
    .route("/login")
    // Below API is used for login
    .post(controller.login);
};

export default routes;
