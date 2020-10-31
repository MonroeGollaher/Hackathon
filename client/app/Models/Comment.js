import { ProxyState } from "../AppState.js"

export default class Comment {
  constructor(data) {
    this._id = data._id
    this.author = data.author
    this.body = data.body
    this.user_id = data.user_id
    this.postId = data.postId
    this.count = data.voteCount
    this.voteArr = data.voted
  }

  get Comment() {
    return /*html*/`
    <div class="col">
      <h4>${this.author}</h4>
      <p>${this.body}</p>
      <p><i class="fas fa-heart" onclick="app.commentController.vote('upvote')"></i> : ${this.count} : <i class="fas fa-heart-broken" onclick="app.commentController.vote('downvote')"></i></p>
    </div>`
  }
}