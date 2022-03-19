const User = require("../model/user");
const jwt = require('jsonwebtoken');




const tokenLimit = 7 * 24 * 60 * 60;
const createToken = (id) => {
  return jwt.sign({ id }, "0h7e0n1r9y0t3r5u4t4h2", {
    expiresIn: tokenLimit
  });
};

module.exports.login = async (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  try{
    if (username && password) {
      const user = await User.findOne({
         username
       })
       const token = createToken(user._id)
       expirationDate = tokenLimit
       if(user.password === password){
        res.status(201).json({ id: user._id, username: user.username, token:token, expiresIn:expirationDate })
       }else{
        res.status(400).json("password is incorrect");
       }
       
  }}catch(err) {
    console.log(err)
    res.status(400).json("username or password is incorrect");
    
  }
};
