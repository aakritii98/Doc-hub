const express = require('express');
const bodyParser = require('body-parser')
const pageRoutes = require('./apis/routes/pageRoutes');
const userRoutes = require('./apis/routes/userRoutes');
const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/DocHub" ,  { useNewUrlParser: true,
   useUnifiedTopology: true,
   useCreateIndex: true,
   useFindAndModify: false});

const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(express.static("public"));

app.use("/",pageRoutes);
app.use('/user',userRoutes);





app.listen("3000",()=>{
    console.log("Server is running on port 3000");
})