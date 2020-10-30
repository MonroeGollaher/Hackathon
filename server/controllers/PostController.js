import { Auth0Provider } from "@bcwdev/auth0provider";
import { profilesService } from "../services/ProfilesService";
import BaseController from "../utils/BaseController";
import { postService } from "../services/PostService"
// import { commentService } from "../services/CommentService"

export class PostController extends BaseController {
  constructor() {
    super("");
    this.router
      .use(Auth0Provider.getAuthorizedUserInfo)
      .get("", this.getUserProfile)
  }
  async getUserPosts(req, res, next) {
    try {
      let profile = await postService.getProfile(req.userInfo);
      res.send(profile);
    } catch (error) {
      next(error);
    }
  }

  async getUserPosts(req, res, next){
    try {
      let userPosts = await postService.getPostsByUserId(req.params.id); 
      res.send(userPosts)
    } catch (error) {
      next(error)
    }
  }
}
