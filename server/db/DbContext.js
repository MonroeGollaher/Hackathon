import mongoose from "mongoose";
import ValueSchema from "../models/Value";
import ProfileSchema from "../models/Profile";
import PostSchema from "../models/Post";
import CommentSchema from "../models/Comment";


class DbContext {
  Values = mongoose.model("Value", ValueSchema);
  Profile = mongoose.model("Profile", ProfileSchema);
  Comment = mongoose.model("Comment", CommentSchema);
  Post = mongoose.model("Post", PostSchema);

}

export const dbContext = new DbContext();
