import mongoose from "mongoose";
const Schema = mongoose.Schema;

const Comment = new Schema(
  {
    body: [{ type: String, required: true }],
    author: {type: String, required: true, default: "User"},
    voteCount: { type: Number, required: true, default: 0 },
    imgUrl: { type: String },
    userId: { type: String, ref: "Profile", required: true },
    postId: { type: String, ref: "Post", required: true }
    // NOTE If you wish to add additional public properties for Comments do so here
  },
  { timestamps: true, _id: true, toJSON: { virtuals: true } }
);

Comment.virtual("creator", {
  localField: "userId",
  ref: "Profile",
  foreignField: "_id",
  justOne: true
})

export default Comment;
