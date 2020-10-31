import { ProxyState } from '../AppState.js'
import { api } from './AxiosService.js'
import Post from '../Models/Post.js'

class PostService {
    // constructor(){
    //     this.getPosts()
    // }
  async getPosts() {
    let res = await api.get("/posts")
    ProxyState.posts = res.data.map(rawPost => new Post(rawPost))
  }

  async create(data){
    await api.post("/posts", data)
    this.getPosts()
  }

  async delete(id){
    await api.delete('/posts/', id)
  }

  async addComment(comment){
    await api.post("/comments", comment)
    this.getPosts()
  }

}

export const postService = new PostService()