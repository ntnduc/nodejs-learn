var db = require('../db')
var shortid = require('shortid')

module.exports.index = function(request, response) {
    response.render('user/index', {
        users: db.get('users').value(),
        cookies: request.cookies.userId
    })
}

module.exports.search = function(req, res) {
    var q = req.query.q;
    var matchesUser = db.get('users').value().filter(function(user) {
        return user.name.toLowerCase().indexOf(q.toLowerCase()) !== -1;
    });

    res.render('user/index', {
        q: q,
        users: matchesUser
    });
}

module.exports.create = function(req, res) {
    res.render('user/create')
}

module.exports.getUserId = function(req, res) {
    var userId = req.params.userId;
    var user = db.get('users').find({ id: userId }).value();
    console.log(user);
    res.render('user/view', {
        user: user
    });
}

module.exports.postCreate = function(req, res) {
    console.log('user: ', req.body);
    req.body.id = shortid.generate();
    db.get('users')
        .push(req.body).write();
    res.redirect('/user');
}