var express = require('express');
var router = express.Router();
var users = require('../data/users');


/* GET users listing. */
router.get('/', (req, res, next) => {
    console.log('/ -> ' + users);
    res.send('respond with a resource');
});


router.get('/users', (req, res, next) => { /* GET /users */
    console.log('/users -> '+ users);
    res.json(users);
});


router.get('/users/:id', (req, res, next) => { /* GET /users/1 */
    const id = parseInt(req.params.id);
    if (!id) {
        return res.status(400).json({error: 'Incorrect id'});
    } else {
        var user = users.filter(user => user.id === id)[0];
        if (!user) {
            return res.status(404).json({error: 'Unknown user'});
        } else {
            res.json(user);
        }
    }
});

router.delete('/users/:id', (req, res, next) => {
    const id = parseInt(req.params.id);
    if (!id) {
        return res.status(400).json({error: 'Incorrect id'});
    }
    const userIdx = users.findIndex(user => {
        return user.id === id;
    });
    if (userIdx === -1) {
        return res.status(404).json({error: 'Unknown user'});
    }
    users.splice(userIdx, 1);
    res.status(204).send();
});

module.exports = router;
