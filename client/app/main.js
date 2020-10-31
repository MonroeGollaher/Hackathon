import { AuthController } from "./Controllers/AuthController.js";
import ValuesController from "./Controllers/ValuesController.js";
import PostController from "./Controllers/PostController.js";


class App {
  authController = new AuthController();
  valuesController = new ValuesController();
  postController = new PostController();
}

window["app"] = new App();
