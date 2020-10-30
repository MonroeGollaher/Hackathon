import mongoose from "mongoose";
const Schema = mongoose.Schema;

const Post = new Schema(
  {
    title: { type: String, required: true}, 
    description: { type: String, required: true},
    creatorId: { type: String, ref: "Profile", required: true },
    _id: { type: String, required: true },
    imgUrl: { type: String, required: true, default: "//placehold.it/200" }
    // NOTE If you wish to add additional public properties for Posts do so here
  },
  { timestamps: true, _id: false, toJSON: { virtuals: true } }
);

Post.virtual("creator", {
    localField: "creatorId", 
    ref: "Profile", 
    foreignField: "_id", 
    justOne: true
})
export default Post;
