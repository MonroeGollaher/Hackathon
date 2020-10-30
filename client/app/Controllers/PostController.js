import { ProxyState } from "../AppState.js";
import { postService } from "../Services/PostService.js";

//Private
function _draw() {
  let posts = ProxyState.posts;
  console.log(posts);
}

//Public
export default class ValuesController {
  constructor() {
    ProxyState.on("values", _draw);
    console.log("hello from post service");
  }

  create(e){
    e.preventDefault()
    let data = {
        title: e.target.title.value, 
        description: e.target.description.value
    }

    postService.create(data)
    e.target.reset()
    // Modal? 
  }

  delete(id){
      postService.delete(id)
  }

}
