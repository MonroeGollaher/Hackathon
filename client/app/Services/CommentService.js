import {ProxyState} from "../AppState.js"
import {api} from "./AxiosService.js"
import Comment from "../Models/Comment.js"

class CommentService {
    constructor(){
        
    }
    async getComments(){
        let res = await api.get('/comments')
        ProxyState.comments = res.data.map(rawComment => new Comment(rawComment))
    }

    async addComment(comment){
        await api.post("/comments", comment)
        this.getComments()
    }
}

export const commentService = new CommentService()