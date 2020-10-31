import mongoose from "mongoose";
const Schema = mongoose.Schema;

const Post = new Schema(
  {
    // _id: { type: String, required: true },
    title: { type: String, required: true, default: "Post" },
    body: { type: String, required: true },
    imgUrl: { type: String, required: true, default: "//placehold.it/200" },
    isPrivate: { type: Boolean, required: true, default: false },
    userId: { type: String, ref: "Profile", required: true },
    // NOTE If you wish to add additional public properties for Posts do so here
  },
  { timestamps: true, _id: true, toJSON: { virtuals: true } }
);


Post.virtual("creator", {
  localField: "userId",
  ref: "Profile",
  foreignField: "_id",
  justOne: true
})
export default Post;
