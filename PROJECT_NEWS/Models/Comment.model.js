import mongoose from "mongoose";

const commentSchema = mongoose.Schema({
    comAuthor: String,
    comText: String,
    newsId: String
})

const Comment = mongoose.model("Comment", commentSchema)

export default Comment