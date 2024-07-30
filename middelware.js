const express=require("express")
const app=express();
const port=8080;
let expresserror=require('./expresserror')

//middelware
//next()
app.use((req,res,next)=>{
    console.log("hloooo")
next();
})
//logger-morgan
app.use((req,res,next)=>{
    req.time=new Date(Date.now()).toString();
    console.log(req.method,req.path,res.hostname,req.time)
next();
})
//token use 
app.use('/api',(req,res,next)=>{
 const {token}=req.query;
 if(token=="khushi"){
    next()
 }
 //throw error
 throw new expresserror(402,'ACCES DENIED');
 //res.send("ACCES DENIED")
})

//error handling
app.use((err,req,res,next)=>{
    console.log('-----error----')
    next(err);
})
//
app.get("/",(req,res)=>{
    res.send('nooooo')
})
app.get("/list",(req,res)=>{
    res.send('nooooo  brooooo')
})
app.get("/api",(req,res)=>{
    res.send("DATA")
})
app.get("/err",(req,res)=>{
      new1=new1;
})



//404-not founf
app.use((req,res)=>{
    res.send("page not found!")
})

 app.listen(port,()=>
{
    console.log('connect')
})