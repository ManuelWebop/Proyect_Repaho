import mongoose from "mongoose";


const UserSchema = new mongoose.Schema({
    username:{
        type: String,
        required: true,
        unique:true,
        default: 'name'
    },
    email:{
        type: String,
        required: true,
        unique: true
    },
    password:{
        type: String,
        required: true,
    },
    image:{ type:String }
},{timestamps: true})

export default mongoose?.models?.User || mongoose.model("User", UserSchema)