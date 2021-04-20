const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const Department = require('../apis/models/departmentSchema');
const JWTstrategy = require('passport-jwt').Strategy;
const ExtractJWT = require('passport-jwt').ExtractJwt;

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