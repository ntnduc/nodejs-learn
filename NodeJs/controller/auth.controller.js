var db = require('../db')

module.exports.login = function(req, res) {
    res.render('auth/login')
}

module.exports.postLogin = function(req, res) {
    var error = [];
    var password = '';
    var userLogin = '';
    if (!db.get('login').find({ email: req.body.email }).value()) {
        error.push('User do not exits.');
        res.render('auth/login', {
            errors: error
        });
        return;
    }

    userLogin = db.get('login').find({ email: req.body.email }).value();
    password = userLogin.password;

    if (password !== req.body.password) {
        error.push('Password wrong');
        res.render('auth/login', {
            errors: error
        });
        return;
    }
    res.cookie('userId', userLogin.id, { signed: true });
    res.redirect('/user');
}

module.exports.postLockout = function(req, res) {
    res.clearCookie('userId');
    res.redirect('/auth/login');
}