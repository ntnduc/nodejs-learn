module.exports.postCreate = function(req, res, next) {
    var errors = [];
    if (!req.body.name) {
        errors.push('Name is not required.');
    }

    if (!req.body.phone) {
        errors.push('Phone is not required');
    }

    if (errors.length) {
        res.render('user/create', {
            errors: errors,
            name: req.body.name ? req.body.name : '',
            phone: req.body.phone ? req.body.phone : ''
        })
        return;
    }
    next();
}