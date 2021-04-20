const express = require('express');
const bodyParser = require('body-parser')
const pageRoutes = require('./apis/routes/pageRoutes');
const secureRoutes = require('./apis/routes/secureroutes');
const auth = require('./apis/routes/auth');
const departmentRoutes= require('./apis/routes/department');
const mongoose = require("mongoose");
const passport = require('passport');
const requireAuth = passport.authenticate("jwt", { session: false });


require('./auth/passport');
require('./auth/departmentAuth');
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


app.use('/auth',auth);
app.use('/department',requireAuth,departmentRoutes)
app.use('/sec/',requireAuth,secureRoutes);
app.use("/",pageRoutes);




app.listen("3000",()=>{
    console.log("Server is running on port 3000");
})