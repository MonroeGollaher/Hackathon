import {ProxyState} from "../AppState.js"

export default class Post{
  constructor(data){
    this._id = data._id
    this.title = data.title
    this.author = data.author
    this.imgUrl = data.imgUrl || "https://via.placeholder.com/150"
    this.body = data.body 
    this.user_id = data.user_id
    this.count = data.count
  }

  get PostCard(){
    return /*html */`
    <div class="col-3" onclick="app.postController">
      <div class="p-2 border: rounded bg-gray">
        <img src="${this.imgUrl}" alt="">
        <h2>${this.title}</h2>
        <h4>${this.author}</h4>
        <p>${this.count}</p>
      </div>
    </div>
    `
  }

  get PostTemplate(){
    return /*html */`
    <div class="col">
      <img src="${this.imgUrl}" alt="">
      <h1>${this.title}</h1>
      <h4>${this.author}</h4>
      <p>${this.body}</p>
    </div>
    `
  }
}