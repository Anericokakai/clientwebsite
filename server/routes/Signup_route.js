const express=require('express')
const bcrypt = require("bcryptjs");
const sign_route=express.Router()


sign_route.post("/api", async (req, res) => {
    try {
      const {name,email,password}=req.body
     
  
      const userschema = require("../model/userdetail");
  
      const userExist = await userschema.findOne({useremail:email});
     
      if (userExist) {
        console.log('user already exist')
        return res.json({ error: "user already exist" });
        
      } 
    
        const hashed_password= await bcrypt.hash(password,10)
        
        const User = userschema;
    
        const newuser = await User.create({
          username: name,
          useremail: email,
          userpassword: hashed_password,
        });
        if (newuser) {
          console.log("user added succsefully");
          res.json({
            status: "ok",
          });
        }
      // login
  
  
    } catch (error) {
      console.log(error)
    }
  
  
  });
  module.exports=sign_route