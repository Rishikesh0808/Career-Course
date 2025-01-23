const Job=require('../models/Job.model')
const router=require('express').Router();
router.post('/post',async (req,res)=>{
    console.log("entered");
    try{
        
        const job=new Job(req.body);

         await job.save();
         console.log(job);
         res.status(201).json({ message: 'Job vacancy posted successfully!', job });
}
catch{
    res.status(400).json({message:"Invalid Request"})
}
})
router.get("/getByTitle/:jobTitle",async (req,res)=>{
    try{
        const job=await Job.find({jobTitle:req.params.jobTitle});
        res.status(201).json(job);
    }
    catch(err)
    {
        res.status(400).send({message:"Invalid Request"})
    }})
router.put('/apply',async(req,res)=>{
    try{
        const job=await Job.findOne({jobTitle:req.body.jobTitle});
        job.ApplicantList.push(req.body.name);
        await job.save();
        res.status(201).json({message:"Applied Successfully"});
    }
    catch{
        res.status(400).json({message:"Invalid Request"})
    }
    }
)


module.exports=router;