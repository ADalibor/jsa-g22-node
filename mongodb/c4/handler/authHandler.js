const User = require("../pkg/user/userSchema");
const jwt = require('jsonwebtoken');
const bcrypt = require("bcryptjs");
const { promisify } = require('util');
const { rejects } = require("assert");
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

    res.cookie('jwt', token, {
      expires: new Date(Date.now() + process.env.JWT_COOKIE_EXPIRES * 24 * 60 * 60 *100),
      secure: false,
      httpOnly: true,
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

exports.protect = async (req, res, next) => {
  console.log(req.headers);
  //1.go zemame tokenot i proveruvame dali e tamu
  let token;
  if (req.headers.authorization) {
     token = req.headers.authorization.split(' ')[1];
  }
  if (!token) {
    return res.status(500).send('U are not logged in')
  }

  //function verifyToken(token) {
    //return new Promise((resolve, reject) => {
      //jwt.verify(token, process.env.JWT_SECRET, (err, decodedToken) => {
        //if(err) {
          //reject ( new Error('Token verificication failed'));
        //} else {
        //  resolve(decodedToken);
      //  }
    //  });
  // });
  //}
  //2.go verificirame tokenot
  //util.promisify; //zema call back bazirana funkcija kako argumnent i ni vrakja nova 
                  //funkcija sto taa ni vrakja promis
  //jwt.verify(token, process.env.JWT_SECRET)

  //const verifyAsync = promisify( jwt.verify);
 // const decoded = await verifyAsync( token, process.env.JWT_SECRET);

  const decoded = await promisify(jwt.verify)(token, process.env.JWT_SECRET);

  //3.proveruvame dali postoi korisnikot

  const userTrue = await User.findById(decoded.id);
  if (!userTrue) {
    return res.status(400).send('Userot ne postoi');
  }

  next();
};