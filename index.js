const express = require('express')

const app = express()

app.get('/',function(req,res){
    res.send('Hello world')
})

app.get('/about',function(req,res){
    res.send('About Us')
})

app.listen(8080,function(){
    console.log('Listening at port 8080')
})


//git init 
//
//git add .
//git commit -m '##'
//git push

//git switch -c feat-001