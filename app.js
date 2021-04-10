const express = require('express');
const bodyParser = require('body-parser')
const pageRoutes = require('./apis/routes/pageRoutes');

const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(express.static("public"));

app.use("/",pageRoutes);





app.listen("3000",()=>{
    console.log("Server is running on port 3000");
})