let file=require('fs')
//readfile
/*file.readFile('file.txt','utf8',(err,data)=>{
    console.log(err,data)
})
console.log("finesh file reading")


//readfileSync
let a=file.readFileSync('file.txt')
console.log(a.toString())
console.log('finish reading')

//writtenfile
file.writeFile('file.txt','this is a data',()=>{
    console.log('writen all')
})
console.log('writen all file')

//writtenfilesync
let p=file.writeFileSync('file.txt','hlo guys nice meting')
console.log(p)
file.appendFileSync('file.txt','  take care')
console.log('byy')


//renamefile
file.renameSync('file.txt','newfile.txt')*/


//deletfiles
file.unlinkSync('gile.text')
