import mongoose from "mongoose";
const Schema = mongoose.Schema;

const Comment = new Schema(
  {
    _id: {type: String, required: true},
    body: [{ type: String, required: true }],
    imgUrl: { type: String, required: true, default: "//placehold.it/200" },
    voteCount: { type: Number, required: true },
    picture: { type: String }, 
    userId: { type: String, ref: "Profile", required: true}, 
    postId: { type: String, ref: "Post", required: true}
    // NOTE If you wish to add additional public properties for Comments do so here
  },
  { timestamps: true, _id: false, toJSON: { virtuals: true } }
);

export default Comment;
