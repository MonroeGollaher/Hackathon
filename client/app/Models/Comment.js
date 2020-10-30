import {ProxyState} from "../AppState.js"

export default class Comment {
  constructor(){

  }

  get CommentForm(){
    return /*html */ `
    <form class="" onsubmit="app.commentController.create(event)">
      <input type="text" name="comment" id="comment" placeholder="Add your comment...">
      <button type="submit">&plus</button>
    </form>`
  }
}