import mongoose from "mongoose";

const CommentSchema = new mongoose.Schema({
    publicId:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Blog",
        required: true
    },
    userId:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    text:{
        type: String,
        required: true
    }
},
{
    timestamps: true
})

export default mongoose?.model?.Commit || mongoose.model("Commit", CommentSchema)