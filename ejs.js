const express=require('express')
const app=express();
const path=require('path')
const port=8080;
app.use(express.static(path.join(__dirname,'/public')))
app.set('view engine','ejs');
app.set('views',path.join(__dirname,'/views'));

app.get('/',(req,res)=>{
res.render('home.ejs')
})
app.get('/number',(req,res)=>{
    let dice=Math.floor(Math.random()*10)+1
    res.render('roll.ejs',{dice})
    })
    app.get('/ig/:username',(req,res)=>{
        let {username}=req.params
        const instadata=require("./data.json")
        const data=instadata[username]
        res.render('insta.ejs',{data})
        })
app.listen(port,()=>{
    console.log(`listing on port${port}`)
})