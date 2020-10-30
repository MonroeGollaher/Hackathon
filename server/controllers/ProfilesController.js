import { Auth0Provider } from "@bcwdev/auth0provider";
import { profilesService } from "../services/ProfilesService";
import BaseController from "../utils/BaseController";
import { postService } from "../services/PostService"
// import { commentService } from "../services/CommentService"

export class ProfilesController extends BaseController {
  constructor() {
    super("api/profile");
    this.router
      .use(Auth0Provider.getAuthorizedUserInfo)
      .get("", this.getUserProfile)
      .get("/:id/posts", this.getUserPosts)
  }
  async getUserProfile(req, res, next) {
    try {
      let profile = await profilesService.getProfile(req.userInfo);
      res.send(profile);
    } catch (error) {
      next(error);
    }
  }

  async getUserPosts(req, res, next) {
    try {
      let userPosts = await postService.getMyPosts(req.params.id);
      res.send(userPosts)
    } catch (error) {
      next(error)
    }
  }

}
