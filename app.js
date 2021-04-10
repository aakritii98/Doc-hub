const express = require('express');
const bodyParser = require('body-parser')

const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(express.static("public"));

app.get("/",(req,res)=>{
    res.render('index');
})

app.get("/adminLogin",(req,res)=>{
    res.render('login');
})

app.get("/departmentLogin",(req,res)=>{
    res.render('login2');
})

app.get("/teacherLogin",(req,res)=>{
    res.render('TLogin');
})



app.listen("3000",()=>{
    console.log("Server is running on port 3000");
})