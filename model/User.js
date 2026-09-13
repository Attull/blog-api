import mongoose from "mongoose";

const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,

  },
  password: {
    type: String,
    required: true,
    minlength: 6,
  },
   blogs: [{ 
    type: mongoose.Types.ObjectId,
    ref: "Blog", 
    required: true }],
  role:{
    type:String,
    enum:{
      values:["guest", "admin"],
      message: 'Role must be guest or admin'
    },
    default: "guest"
  }
    
});
export default mongoose.model("User", userSchema);
// users
