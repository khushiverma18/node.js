
const express=require('express')
const app=express()
const port=8080;

app.get('/register',(req,res)=>{
    res.send("stander get response");
})
app.post('/registers',(req,res)=>{
    res.send("stander post response")
})
app.listen(port,()=>{
    console.log(`listen port on${port}`)
})