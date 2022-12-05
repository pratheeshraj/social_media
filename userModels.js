// create table for users

import mongoose from "mongoose";

const userschema = new mongoose.Schema(
  {
    username: {type:String,required:true},
    userauth: {type:String,required:true,unique:true},
    password: {type:String,required:true},
  },{
    timestamps: true
  });

const User = mongoose.model("Users", userschema);

export default User;
