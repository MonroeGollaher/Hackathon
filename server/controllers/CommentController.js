import { Auth0Provider } from "@bcwdev/auth0provider";
import BaseController from "../utils/BaseController";
import { commentService } from "../services/CommentService.js"
// import { commentService } from "../services/CommentService"

export class CommentController extends BaseController {
  constructor() {
    super("api/comments");
    this.router
      .get("", this.getAll)
      .use(Auth0Provider.getAuthorizedUserInfo)
      .get("/:id", this.getById)
      .post('', this.createComment)
      .delete('/:id', this.deleteComment)
  }

  async getAll(req, res, next) {
    try {
      let comments = await commentService.getAll();
      res.send(comments)
    } catch (error) {
      next(error)
    }
  }
  async getById(req, res, next) {
    try {
      let comments = await commentService.getById(req.params.id)
      res.send(comments)
    } catch (error) {
      next(error)
    }
  }
  async createComment(req, res, next) {
    try {
      req.body.userId = req.userInfo.id
      let comments = await commentService.create(req.body)
      res.send(comments)
    } catch (error) {
      next(error)
    }
  }

  async deleteComment(req, res, next) {
    try {
      let comments = await commentService.delete(req.userInfo.id, req.params.id)
      res.send(comments)
    } catch (error) {
      next(error)
    }
  }
}
