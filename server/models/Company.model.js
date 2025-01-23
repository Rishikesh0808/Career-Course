const mongoose=require('mongoose');
const CompanySchema=new mongoose.Schema({
    name:String,
    email:String,
    password:String
})
const Company=mongoose.model('Company',CompanySchema)
module.exports=Company;