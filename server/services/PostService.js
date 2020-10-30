import { dbContext } from "../db/DbContext";
import { BadRequest } from "../utils/Errors";

class PostService {

  async find(query = {}) {
    let post = await dbContext.Post.find(query).populate("creator", "-updatedAt -subs");
    return post;
  }
  async findById(id) {
    let post = await dbContext.Post.findById(id);
    if (!post) {
      throw new BadRequest("Invalid Id");
    }
    return post;
  }

  async getPostsByUserId(userId) {
    return await dbContext.Post.find({ creatorId: userId })
  }

  async delete(userId, id) {
    return await dbContext.Post.findOneAndDelete({ userId, _id: id })
  }

  async create(data) {
    return await dbContext.Post.create(data)
  }
}

export const postService = new PostService();