const express = require('express');
const bodyParser = require('body-parser')
const pageRoutes = require('./apis/routes/pageRoutes');
const secureRoutes = require('./apis/routes/secureroutes');
const auth = require('./apis/routes/auth');
const adminActionsRoutes= require('./apis/routes/admin_actions');
const departmentActionsRoutes= require('./apis/routes/department_actions');

const departmentsignin = require('./apis/routes/department_login')
const mongoose = require("mongoose");
const passport = require('passport');
const requireAuth = passport.authenticate("jwt", { session: false });


require('./auth/passport');
require('./auth/departmentAuth');
// mongoose.connect("mongodb+srv://DocHub:DocHub21@cluster0.ud6bg.mongodb.net/myFirstDatabase?retryWrites=true&w=majority" ,  { useNewUrlParser: true,
//    useUnifiedTopology: true,
//    useCreateIndex: true,
//    useFindAndModify: false})
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
app.use('/departmentLogin',departmentsignin);
app.use('/adminActions',requireAuth,adminActionsRoutes);
app.use('/departmentActions',requireAuth,departmentActionsRoutes);

app.use('/sec/',requireAuth,secureRoutes);
app.use("/",pageRoutes);




app.listen("3000",()=>{
    console.log("Server is running on port 3000");
})