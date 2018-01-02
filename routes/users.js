var express = require('express');
var router = express.Router();
var users = require('../data/users');


/* GET users listing. */
router.get('/', (req, res, next) => {
    console.log('/ -> ' + users);
    res.send('respond with a resource');
});


router.get('/users', (req, res, next) => {
    console.log('/users -> '+ users);
    res.json(users);
});

router.get('/users/:id', (req, res, next) => {
    const id = parseInt(req.params.id);
    if (!id) {
        return res.status(400);
    } else {
        var user = users.filter(user => user.id === id)[0];
        if (!user) {
            return res.status(404);
        } else {
            res.json(user);
        }
    }
});


module.exports = router;
