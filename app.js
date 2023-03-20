const express=require('express');
const bodyParser=require('body-parser');
const path = require('path');
const ejs=require('ejs')
const app=express();
console.log(__dirname)
app.use(bodyParser.urlencoded({extended:true}));
app.set('views','./views')
app.set('view engine','ejs')
//static files
app.use(express.static('public'))


app.get('/',(req,res)=>{
  res.render('index',{ text:  'this is ejs'})
})
app.get('/reg',(req,res)=>{
  res.render('reg',{ text:  'this is ejs'})
})


app.listen(3000,()=>{
  console.log("running on port 3000");
})
