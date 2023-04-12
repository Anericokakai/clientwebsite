const express = require("express");
const login_route = express.Router();
const user = require("../model/userdetail");
const bcrypt=require('bcryptjs')
login_route.post("/userlogin", async (req, res) => {
 
  const { email, password } = req.body;
  console.log(email);
  const check_existence = await user.findOne({ useremail: email });
  if (check_existence) {
    console.log("user exist");
const db_pass=check_existence.userpassword
const pass_compare= await bcrypt.compare(password,db_pass)
if(pass_compare){
    // create a jtw token
console.log('this the user')
res.status(200).json({"userinfo":"user exist"})
}else{
    console.log('this is not the user')
    res.json({"error":"user password dont match"})
}


  }else{
    console.log("user does not exist")
    res.json({"error ":"invalid email address"})
  }
});

module.exports = login_route;
