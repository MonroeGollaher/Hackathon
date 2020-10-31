import { ProxyState } from "../AppState.js";
import { postService } from "../Services/PostService.js";
import {commentService} from "../Services/CommentService.js"

//Private
function _drawPosts() {
    let template = ""
    ProxyState.posts.forEach(p => template += p.PostCard)
    document.getElementById("posts").innerHTML = template  
}

function _drawComments(){
let template = ""
ProxyState.comments.forEach(c => template += c.Comment)
document.getElementById("comments").innerHTML = template
}

//Public
export default class PostController {
  constructor() {
    ProxyState.on("posts", _drawPosts);
    ProxyState.on("comments", _drawComments)
    _drawPosts()
  }

  create(e){
    e.preventDefault()
    let data = {
        imgUrl: e.target.imageUrl.value, 
        body: e.target.imageDescription.value,
    }

    postService.create(data)
    e.target.reset()
  }

  inspectPost(postId){
    let post = ProxyState.posts.find(p=> p._id == postId)
    document.getElementById("post").innerHTML = post.PostTemplate
    commentService.getComments()
  }

  addComment(e, id){
    e.preventDefault()

    let comment = {
        body: e.target.commentText.value,
        postId: id
    }
    commentService.addComment(comment)
    e.target.reset()

  }

  delete(id){
      postService.delete(id)
  }

//   toggleVisibility(){
//       document.getElementById("toggleVisibility").classList.add("hidden")
//   }

}
