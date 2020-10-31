import { ProxyState } from "../AppState.js";
import { postService } from "../Services/PostService.js";

//Private
function _drawPosts() {
    let template = ""
    console.log("posts");
    ProxyState.posts.forEach(p => template += p.PostCard)
    document.getElementById("posts").innerHTML = template  
}   

//Public
export default class PostController {
  constructor() {
    ProxyState.on("posts", _drawPosts);
    console.log("hello from post controller");
  }

  create(e){
    e.preventDefault()
    let data = {
        image: e.target.imageUrl.value, 
        description: e.target.description.value
    }

    postService.create(data)
    e.target.reset()
    console.log("create button");
  }

  delete(id){
      postService.delete(id)
  }

}
