import { ProxyState } from "../AppState.js"

export default class Post {
  constructor(data) {
    this._id = data._id
    this.title = data.title || ""
    this.email = data.name
    this.author = data.creator.name
    this.userId = data.userId
    this.imgUrl = data.imgUrl || "https://via.placeholder.com/150"
    this.body = data.body || ""
    this.count = data.voteCount
    this.voteArr = data.voteArr
    this.creator = data.creator
  }

  get PostCard() {
    return /*html */`
    <div class="col-3" onclick="app.postController.inspectPost('${this._id}')">
      <div class="p-2 border: rounded bg-gray shadow-lg">
        <img class="img-fluid" src="${this.imgUrl}" alt="">
        <h2>${this.body}</h2>
        <h4>${this.author}</h4>
        <p>${this.count}</p>
      </div>
    </div>
    `
  }

  get PostTemplate() {
    return /*html */`
    <div class="col">
      <img src="${this.imgUrl}" alt="">
      <h1>${this.body}</h1>
      <h4>${this.author}</h4>
      <p>${this.body}</p>
      <form onsubmit="app.postController.addComment(event, '${this._id}')">
        <div class="form-group text-dark">
            
            <input type="text" class="form-control" name="commentText" id="comment" aria-describedby="" placeholder="Add Comment">
        </div>
        <button class="btn bg-primary" type="submit">Add Comment</button>
      </form>
      <div id="comments">
      </div>
    </div>
    `
  }
}