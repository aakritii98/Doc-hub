const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const Department = require('../apis/models/departmentSchema');
const JWTstrategy = require('passport-jwt').Strategy;
const ExtractJWT = require('passport-jwt').ExtractJwt;

