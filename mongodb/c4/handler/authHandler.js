const User = require("../pkg/user/userSchema");
const jwt = require('jsonwebtoken');
const bcrypt = require("bcryptjs");

exports.signup = async (req, res) => {
  try {
    const newUser = await User.create({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
    });

    const token = jwt.sign({id: newUser._id}, process.env.JWT_SECRET, {
      expiresIn: process.env.JWT_EXPIRES,
    });

    res.status(201).json({
      status: "success",
      token,
      data: {
        user: newUser,
      },
    });
  } catch (err) {
    return res.status(500).send(err);
  }
};

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;
    console.log(email, password);
    //1.Proveruvame dali ima vneseno email i pasvord
    if(!email || !password) {
      return res.status(400).send('Please provide email and password!');
    }
    //2.Proveruvame dali korisnikot postoi
    const user = await User.findOne({ email });
    console.log(user);
    if (!user) {
      return res.status(401).send('Invalid email')
    }
    //3.Sporeduvame pasvordi
    const isPasswordValid = bcrypt.compareSync(password, user.password);
    console.log(isPasswordValid);
    if (!isPasswordValid) {
      return res.status(400).send('Invalid email or password!');
    }
    //4.Generirame i isprakjame token
    const token = jwt.sign({id: user._id}, process.env.JWT_SECRET, {
      expiresIn: process.env.JWT_EXPIRES,
    });
    res.status(201).json({
      status: "success",
      token,
      //data: {
      //  user,
      //}
    });
  }catch(err){
    return res.status(500).send(err);
  }
};
