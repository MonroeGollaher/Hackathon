import { dbContext } from "../db/DbContext";
import { BadRequest } from "../utils/Errors";

class CommentService {
  async getMyComment(id) {
    let comments = await dbContext.Comment.find({ userId: id })
    return comments
  }

  async getAll(query = {}) {
    let comment = await dbContext.Comment.find(query).populate("creator", "-updatedAt -subs");
    return comment;
  }

  async getCommentsByPost(id) {
    let comment = await dbContext.Comment.find({ postId: id }).populate("creator", "-updatedAt -subs");
    return comment;
  }

  async getById(id) {
    let comment = await dbContext.Comment.findById(id);
    if (!comment) {
      throw new BadRequest("Invalid Id");
    }
    return comment;
  }

  async delete(userId, id) {
    let comment = await dbContext.Comment.findOneAndDelete({ userId, _id: id })
    if (!comment) {
      throw new BadRequest("Invalid Id");
    }
    return comment;
  }

  async create(data) {
    return await dbContext.Comment.create(data)
  }
}

export const commentService = new CommentService();