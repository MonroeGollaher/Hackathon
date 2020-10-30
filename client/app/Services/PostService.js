import { ProxyState } from '../AppState.js'
import { api } from './AxiosService.js'
import Post from '../../../server/models/Post.js'

class PostService {
  async getPosts() {
    let res = await api.get("/posts")
    ProxyState.posts = res.data.map(rawPost => new Post(rawPost))
  }

  async create(data){
    await api.get("/posts", data)
    this.getPosts()
  }

  async delete(id){
    await api.delete('/posts/', id)
  }

}

export const profileService = new PostService()