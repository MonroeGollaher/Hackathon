import { dbContext } from "../db/DbContext";
import { BadRequest } from "../utils/Errors";

class PostService {

  async getAll(query = {}) {
    let post = await dbContext.Post.find(query).populate("creator", "-updatedAt -subs");
    return post;
  }
  async getMyPosts(id) {
    let post = await dbContext.Post.find({ userId: id });
    if (!post) {
      throw new BadRequest("Invalid Id");
    }
    return post;
  }

  async delete(userId, id) {
    let post = await dbContext.Post.findOneAndDelete({ userId, _id: id })
    if (!post) {
      throw new BadRequest("Invalid Id");
    }
    return post;
  }

  async create(data) {
    return await dbContext.Post.create(data)
  }
}

export const postService = new PostService();