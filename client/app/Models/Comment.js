import {ProxyState} from "../AppState.js"

export default class Comment {
  constructor(){
    this._id = data._id
    this.author = data.author
    this.body = data.body 
    this.user_id = data.user_id
    this.post_id = data.post_id
    this.count = data.count
  }

  get CommentForm(){
    return /*html */ `
    <form class="col" onsubmit="app.commentController.create(event)">
      <input type="text" name="add" id="add" placeholder="Add your comment...">
      <button type="submit">&plus</button>
    </form>
    `
  }

  get Comment(){
  return /*html*/`
    <div class="col">
      <h4>${this.author}</h4>
      <p>${this.body}</p>
      <p><i class="fas fa-heart" onclick="app.commentController.vote('upvote')"></i> : ${this.count} : <i class="fas fa-heart-broken" onclick="app.commentController.vote('downvote')"></i></p>
    </div>`
  }
}