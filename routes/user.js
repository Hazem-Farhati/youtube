const express = require("express");
const User = require("../modules/user");
const userRouter = express.Router();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require("dotenv").config;
const {
  Validation,
  loginRules,
  registerRules,
} = require("../middleware/validator");
const isAuth = require("../middleware/passport");

///register
userRouter.post("/register", registerRules(), Validation, async (req, res) => {
  const { name, lastname, email, password } = req.body;
  try {
    const newUser = new User(req.body);
    //check if email exist
    const searchedUser = await User.findOne({ email });
    if (searchedUser) {
      return res.status(400).send({ msg: "email already exist" });
    }
    //hash password
    const salt = 10;
    const genSalt = await bcrypt.genSalt(salt);
    const hashedPassword = await bcrypt.hash(password, genSalt);
    // newUser.password = hashedPassword;
    // console.log(hashedPassword);
    newUser.password = hashedPassword;
    //save user
    const result = await newUser.save();
    //generate a token
    const payload = {
      _id: result._id,
      name: result.name,
    };

    require("dotenv").config();
    const token = await jwt.sign(payload, process.env.SecretOrKey, {
      expiresIn: 360000000000000,
    });

    //**********
    res.send({
      user: result,
      msg: "user is saved",
      token: `Bearer ${token}`,
    });
  } catch (error) {
    res.send("can not save the user");
    console.log(error);
  }
});

//login
userRouter.post("/login",loginRules(),Validation, async (req, res) => {
  const { email, password } = req.body;
  try {
    //check email
    const searchedUser = await User.findOne({ email });
    //if email not exist
    if (!searchedUser) {
      return res.status(400).send({ msg: "bad credential" });
    }
    //password equal
    const match = await bcrypt.compare(password, searchedUser.password);

    if (!match) {
      return res.status(400).send({ msg: "bad credential" });
    }
    // cree token
    const payload = { _id: searchedUser._id };
    const token = await jwt.sign(payload, process.env.SecretOrKey, {
      expiresIn: 36000000000000,
    });
    console.log(token);

    //send user
    return res.status(200).send({
      user: searchedUser,
      msg: "user sucess",
      token: `Bearer ${token}`,
    });
  } catch (error) {
    res.status(500).send({ msg: "can not find user" });
  }
});
//current
userRouter.get("/current", isAuth(), (req, res) => {
  res.status(200).send({ user: req.user });
});




//ofhizudozopdkzopdzpdokzd
//post
userRouter.post("/add", async (req, res) => {
  try {
    const newUser = new User(req.body);
    const result = await newUser.save();
    res.status(200).send({ user: result, msg: "produnct is added" });
  } catch (error) {
    res.status(400).send({ msg: "user is not added" });
  }
});

//getall
userRouter.get("/all", async (req, res) => {
  try {
    const result = await User.find();
    res.status(200).send({ user: result, msg: "all user" });
  } catch (error) {
    res.status(400).send({ msg: "can not find user" });
  }
});
//get by id
userRouter.get("/all/:id", async (req, res) => {
  try {
    const result = await User.findById(req.params.id);
    res.status(200).send({ user: result, msg: `${result.title} user` });
  } catch (error) {
    res.status(400).send({ msg: "can not find user by id" });
  }
});
//delete
userRouter.delete("/delete/:id", async (req, res) => {
  try {
    const result = await User.findByIdAndDelete(req.params.id);
    res.status(200).send({ msg: "user deleted" });
  } catch (error) {
    res.status(400).send({ msg: "can not delete user" });
  }
});
//put
userRouter.put("/update/:id", async (req, res) => {
  try {
    const result = await User.findOneAndUpdate(
      { _id: req.params.id },
      { $set: { ...req.body } },
      { new: true }
    );
    res.send({ Response: result, message: "User updated" });
  } catch (error) {
    res.status(400).send({ message: `can not update this User` });
  }
});

//delete all
userRouter.delete("/:title", async (req, res) => {
  try {
    const result = await User.findAndRemove({
      id:req.params.id,
      title:req.params.title
    });
    res.status(200).send({ msg: "all user deleted" });
  } catch (error) {
    res.status(400).send({ msg: "can not delete user" });
  }
});





module.exports = userRouter;
