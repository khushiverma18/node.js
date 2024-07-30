
let ht=require("http")
let port=process.env.PORT||3000;
let server=ht.createServer((req,res)=>{
    res.statusCode=200;
    res.setHeader('Content-Type','text/html')
    res.end('<h1>school</h1><p>welcome to school</p>')
})
server.listen(port,()=>{
console.log(`server is on port${port}`)
})
/*
//
let ht=require("http")
let port=process.env.PORT||3000;
let server=ht.createServer((req,res)=>{
if(req.url=='/' ){
    res.end('hello')}
   else if(req.url=='/about' ){
        res.end('hello mam')}
        else{
            res.end('error,this page is not able')}
})
server.listen(port,()=>{
console.log(`server is on port${port}`)
})
*/