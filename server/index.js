const express=require('express');
const app=express();
const cors= require ('cors')
const {Server}=require('socket.io')
const server = require('http').createServer(app);
const JobRouter=require('./routes/Job.route')
const UserRouter=require('./routes/User.route')
const ProfileRouter=require('./routes/profile.route')
const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(cors())
const io=new Server(server)
const mongodb=require('mongoose');
mongodb.connect("mongodb+srv://rishikeshreddyarra:Rick@cnr.hlvmzpd.mongodb.net/?retryWrites=true&w=majority&appName=CNR").then(()=>{
    console.log("mongodb connected");
}).catch((err)=>{
    console.log("mongodb not connected ",err);
})

app.use('/Jobs',JobRouter)
app.use('/Profile',ProfileRouter);
app.use('/User',UserRouter)
app.get('/',(req,res)=>{
    res.send("server is running");
})
server.listen('5000',(err)=>{
    if(err){
        console.log(err);
    }
    else{
        console.log('server is running on port 5000');
    }
})