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
    _drawPosts()
    console.log("hello from post controller");
  }

  create(e){
    e.preventDefault()
    let data = {
        imgUrl: e.target.imageUrl.value, 
        body: e.target.imageDescription.value,

    }

    postService.create(data)
    e.target.reset()
    console.log("create button");
  }

  inspectPost(postId){
   let post = ProxyState.posts.find(p=> p._id == postId)
//    let template = ""
//    template += post.PostTemplate
//    console.log(post);
//    console.log(template);
   document.getElementById("post").innerHTML = post.PostTemplate;
  }

  addComment(e, id){
    e.preventDefault()
    let post = ProxyState.posts.find(p => p._id == id)
    console.log(post);
    let postId = post._id
    let userId = post.creator._id

    let comment = {
        body: e.target.commentText.value,
        userId: userId,
        postId: postId, 
    }
    postService.addComment(comment)
    e.target.reset()

  }

  delete(id){
      postService.delete(id)
  }

//   toggleVisibility(){
//       document.getElementById("toggleVisibility").classList.add("hidden")
//   }

}
