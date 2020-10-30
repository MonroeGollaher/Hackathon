import { Auth0Provider } from "@bcwdev/auth0provider";
import BaseController from "../utils/BaseController";
import { postService } from "../services/PostService"
// import { commentService } from "../services/CommentService"

export class PostController extends BaseController {
  constructor() {
    super("api/posts");
    this.router
      .use(Auth0Provider.getAuthorizedUserInfo)
      .get("", this.getAll)
      .get("/user", this.getMyPosts)
      .post('', this.create)
      .delete('/:id', this.delete)
  }

  async getAll(req, res, next) {
    try {
      let userPosts = await postService.getAll({ isPrivate: false });
      res.send(userPosts)
    } catch (error) {
      next(error)
    }
  }
  async getMyPosts(req, res, next) {
    try {
      let userPosts = await postService.getMyPosts({ userId: req.userInfo.id })
      res.send(userPosts)
    } catch (error) {
      next(error)
    }
  }
  async create(req, res, next) {
    try {
      req.body.userId = req.userInfo.id
      let userPosts = await postService.create(req.body)
      res.send(userPosts)
    } catch (error) {
      next(error)
    }
  }
  async delete(req, res, next) {
    try {
      let userPosts = await postService.delete(req.userInfo.id, req.params.id)
      res.send(userPosts)
    } catch (error) {
      next(error)
    }
  }
}
