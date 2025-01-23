const User=require('../models/User.model.js');
const Router=require('express').Router();
Router.post('/login',async(req,res)=>{
    const {name,password}=req.body;
    try{
    const user=await User.findOne({name:name,password:password});
    if(user)
    {
        res.json({message:"Login Successfull",user})
    }
    else{
        res.json({message:"Login Failed"});
    }}
    catch(err){res.json({message:"Login Failed",err});}
})
Router.post('/register',async(req,res)=>{
    const {name,email,password}=req.body;
    try{
    const user=await User.findOne({email:email});
    if(user)
    {
        res.json({message:"User Already Exists"});
    }
    else
    {
        const newUser=new User({
            name,email,password
        })
        await newUser.save();
        res.json({message:"User Registered Successfully"});
    }}
    catch{res.json({message:"Registration Failed"});}
})
module.exports=Router;