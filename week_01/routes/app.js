var express = require('express');
var router = express.Router();

var informaton;

router.get('/', function(req, res, next) {
    res.render('node', informaton);
});

router.post('/', function(req, res, next) {
    var title = req.body.title
    var author = req.body.author
    var details = req.body.details
    informaton = {title: title, author: author, details: details}
    res.redirect('/');
})

module.exports = router;