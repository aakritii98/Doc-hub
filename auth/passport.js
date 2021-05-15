const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const User = require('../apis/models/userSchema');
const Department = require('../apis/models/departmentSchema');
const Teacher = require('../apis/models/teacherSchema');

const JWTstrategy = require('passport-jwt').Strategy;
const ExtractJWT = require('passport-jwt').ExtractJwt;

passport.use(
    'signup',
    new LocalStrategy({
        usernameField: 'email',
        passwordField: 'password',
        passReqToCallback: true,
        session: false
    },
        async function (req, email, password, done) {
            const userData = req.body;
            console.log(email);
            try {
                await User.findOne({ email: email }).then(user => {
                    if (user != null) {
                        return done(null, false, { message: 'User already exists' });
                    }
                    else if(userData.institute !='bnsthli123'){
                        return done(null, false, {status:'failure',
                        message:'institute code is not valid'});
                    }
                    else {
                        const user = new User({
                            name: userData.name,
                            email: email,
                            institutecode: userData.institute,
                            password: password
                        });
                        user.save().then((user) => {
                            delete user.password;
                            return done(null, user, { message: 'User Created' });
                        })
                    }
                })
            }
            catch (err) {
                done(err);
            }
        }
    )
)

passport.use(
    'signin',
    new LocalStrategy({
        usernameField:'email',
        passwordField:'password'
    },async(email,password,done)=>{
            try {
                User.findOne({email:email}).then(async(user)=>{
                    if(!user){
                        done(null,false,{message:"User not found"});
                    }
                    else{
                        const validate = await user.isPasswordValid(password);
                        console.log(validate);
                        if (!validate) {
                            return done(null, false, { message: 'Wrong Password' });
                          }
                          delete user.password;
                          return done(null, user, { message: 'Logged in Successfully' });
                    }
                })

            } catch (error) {
                done(error);
            }
    })
)

passport.use(
    new JWTstrategy({
        secretOrKey:'doc-hubJwtSecret',
        jwtFromRequest:ExtractJWT.fromHeader('authorization'),
        // jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken()
    },async (token,done)=>{
        console.log("helli jain");
        try {
            console.log("hello",token);
            if(token){
                let email = token.user;
                let depart = token.department;
                let teach = token.teacher;
                console.log(email,depart,teach);
                if(email){
                    let user = await User.findOne({email:email});
                    done(null,user); 
                }
                else if(depart){
                    let department = await Department.findOne({department_id:depart});
                    console.log(department);
                    done(null,department);
                }
                else if(teach){
                    let teacher = await Teacher.findOne({teacher_id:teach});
                    teacher.department_id = null;
                    done(null,teacher);
                }
            }
            else{
                console.log('helllo');
                done(null,false);
            }
           
        } catch (error) {
            done(error,false);
        }
    })
)


passport.use(
    'departmentAdd',
    new LocalStrategy({
        usernameField: 'department_id',
        passwordField: 'department_password',
        passReqToCallback: true,
        session: false
    },
        async function (req, department_id, department_password, done) {
            const userData = req.body;
            try {
                Department.findOne({ department_id: department_id }).then(department => {
                    if (department != null) {
                        return done(null, false, { message: 'Department already exists' });
                    }
                    else {
                        const department = new Department({
                            admin_id:userData.admin_id,
                            department_id: userData.department_id,
                            department_name: userData.department_name,
                            department_password: userData.department_password,
                        });
                        department.save().then((department) => {
                            delete department.department_password;
                            return done(null, department, { message: 'Department Created' });
                        })
                    }
                })
            }
            catch (err) {
                done(err);
            }
        }
    )
)


passport.use(
    'departmentSignIn',
    new LocalStrategy({
        usernameField: 'department_id',
        passwordField: 'department_password',
        passReqToCallback: true,
        session: false
    },
        async function (req, department_id, department_password, done) {
            const userData = req.body;
            try {
                Department.findOne({ department_id: department_id }).then(async(department) =>{
                    if (!department) {
                        return done(null, false, { message: 'Department Does not exist' });
                    }
                    else{
                        department.isPasswordValid(department_password).then((validate)=>{
                            console.log(validate,'value of validate');
                            if (!validate) {
                                return done(null, false, { message: 'Wrong Password' });
                              }
                              delete department.department_password;
                              return done(null, department, { message: 'Logged in Successfully' });
                        });
                       
                    }
                })
            }
            catch (err) {
                done(err);
            }
        }
    )
)




passport.use(
    'teacheradd',
    new LocalStrategy({
        usernameField: 'teacher_id',
        passwordField: 'teacher_password',
        passReqToCallback: true,
        session: false
    },
        async function (req, teacher_id, teacher_password, done) {
            const userTeacherData = req.body;
            try {
                Teacher.findOne({ teacher_id: teacher_id }).then(teacher => {
                    if (teacher != null) {
                        return done(null, false, { message: 'teacher already exists' });
                    }
                    else {
                        const teacher = new Teacher({
                            department_id: userTeacherData.department_id,
                            teacher_id:teacher_id,
                            department_name: userTeacherData.department_name,
                            teacher_name: userTeacherData.teacher_name,
                            teacher_password: teacher_password,
                        });
                        teacher.save().then((teacher) => {
                            delete teacher.teacher_password;
                            return done(null, teacher, { message: 'Teacher Account Created' });
                        })
                    }
                })
            }
            catch (err) {
                done(err);
            }
        }
    )
)


passport.use(
    'teacherSignIn',
    new LocalStrategy({
        usernameField: 'teacher_id',
        passwordField: 'teacher_password',
        passReqToCallback: true,
        session: false
    },
        async function (req, teacher_id, teacher_password, done) {
            const userData = req.body;
            try {
                Teacher.findOne({ teacher_id: teacher_id }).then(async(teacher) =>{
                    if (!teacher) {
                        return done(null, false, { message: 'teacher account does not exist' });
                    }
                    else{
                        teacher.isPasswordValid(teacher_password).then((validate)=>{
                            console.log(validate,'value of validate');
                            if (!validate) {
                                return done(null, false, { message: 'Wrong Password' });
                              }
                              delete teacher.teacher_password;
                              return done(null, teacher, { message: 'Logged in Successfully' });
                        });
                       
                    }
                })
            }
            catch (err) {
                done(err);
            }
        }
    )
)