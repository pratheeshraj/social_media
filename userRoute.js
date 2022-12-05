import express from "express"
import bcrypt from "bcryptjs"
import User from "./userModels.js"

const userRouter = express.Router();

//register

userRouter.post("/register", async (req,res) => {
    const newUser = new User({
        username: req.body.username,
        userauth: req.body.userauth,
        password: bcrypt.hashSync(req.body.password)
    });
    const user1 = await newUser.save();
console.log(req)
    res.send({
        _id: user1._id,
        username: user1.username,
        userauth: user1.userauth

    });
});
export default userRouter