//const fs=require('fs')
const express = require('express')
const path=require('path')
const app = express()
let port=8080;
//acces folder
app.use(express.static(path.join(__dirname,'static')))
app.use((req,res)=>{
  res.send('hello')
})

// respond with "hello world" when a GET request is made to the homepage
app.get('/hello/:name',(req,res)=>{
  res.send('hello,are u ',req.params.name)
})
app.get('/about',(req,res)=>{
  res.send('hello guys hiii')
 //res.sendFile(fs.readFile('file.js','utf8',(err,data))=>{
  // console.log(err,data)
  //})

  //acess file
  res.sendFile(path.join(__dirname,"index.html"))

})

//if enter wrong 
app.get('*',(req,res)=>{
  res.send('this page is not able')
})

//for query
app.get('/search',(req,res)=>{
  let{q}=req.query;
  res.send(`<h1>the query${q}</h1>`)
})
app.listen(port,()=>{
  console.log(`my new port is${port}`)
})