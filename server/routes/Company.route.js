const Company=require('../models/Company.model.js');
const Router=require('express').Router();
Router.post('/login',async(req,res)=>{
    const {name,password}=req.body;
    try{
    const company=await Company.findOne({name:name,password:password});
    if(company)
    {
        res.json({message:"Login Successfull",Company})
    }
    else{
        res.json({message:"Login Failed"});
    }}
    catch(err){res.json({message:"Login Failed",err});}
})
Router.post('/register',async(req,res)=>{
    const {name,email,password}=req.body;
    console.log(name+" "+email+" "+password);
    try{
    const company=await Company.findOne({email:email});
    if(company)
    {
        res.json({message:"Company Already Exists"});
    }
    else
    {
        const newCompany=new Company({
            name,email,password
        })
        await newCompany.save();
        res.json({message:"Company Registered Successfully"});
    }}
    catch{res.json({message:"Registration Failed"});}
})
module.exports=Router;