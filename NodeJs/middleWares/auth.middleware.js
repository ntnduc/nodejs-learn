var db = require('../db')

module.exports.requiresAuth = function(req, res, next) {
    if (!req.signedCookies.userId) {
        res.redirect('/auth/login');
        return;
    }
    if (!db.get('login').find({ id: req.signedCookies.userId })) {
        console.log('run');
        res.redirect('/auth/login');
        return;
    }
    console.log('run next');
    next();

}