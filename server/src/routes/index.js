const {Router} = require("express")
const discord = require("../passport/discord-passport")
const UserController = require("../controllers/user-controller")
const passport = require("passport")
const oauth2 = require("../services/user-service")
const {logger} = require("sequelize/lib/utils/logger");
const router = new Router()
passport.serializeUser(function(user, done) {
    done(null, user);
});

passport.deserializeUser(function(user, done) {
    done(null, user);
});
router.get('/registration', passport.authenticate("discord"))
router.get('/callback', passport.authenticate('discord', {
    successRedirect: '/api/successAuth/',

}))

router.get("/successAuth", UserController.successAuth)


module.exports = router

