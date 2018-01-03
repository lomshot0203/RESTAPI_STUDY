const express = require('express');
const router = express.Router();
var users = require('../../data/users');


/* GET users listing. */
router.get('/', (req, res, next) => { /* GET /users */
    console.log('************************************************');
    console.log('call router.get...');
    console.log('************************************************');
    res.json(users);
});


router.get('/:id', (req, res, next) => { /* GET /users/1 */
    const id = parseInt(req.params.id);
    console.log('************************************************');
    console.log('call router.get... / req.params.id = ' || req.params.id);
    console.log('call router.get... / id = ' || id);
    console.log('************************************************');
    if (!id) {
        return res.status(400).json({error: 'Incorrect id'});
    } else {
        var user = users.filter(user => user.id === id);
        if (!user) {
            return res.status(404).json({error: 'Unknown user'});
        } else {
            res.json(user);
        }
    }
});

router.delete('/:id', (req, res, next) => { /* DELETE /users/1 */
    console.log('call router.delete..************************************************');
    console.log('req.params.id = ' || req.params.id);
    console.log('************************************************');
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

router.post('/', (req, res, next) => { /*등록*/
    console.log('call router.post..************************************************');
    console.log('req.body.name' + req.body.name);
    console.log('************************************************');
    const name = req.body.name || '';
    if (!name.length) {
        return res.status(400).json({error: 'Incorrect name'})
    }

    const id = users.reduce((maxId, user) => {
        return user.id > maxId ? user.id : maxId;
    }, 0) + 1;

    const newUser = {
      id : id,
      name : name
    };

    users.push(newUser);
    res.status(201).json(newUser);
});

router.put('/:id', (req, res, next) => { /* 수정 */
    console.log('call router.put..************************************************');
    console.log('req.params.id = '+ req.params.id);
    console.log('name = ' || req.body.name);
    console.log('eMail = ' || req.body.eMail);
    console.log('phoneNum = ' || req.body.phoneNum);
    console.log('position = ' || req.body.position);
    console.log('************************************************');

    const id = parseInt(req.params.id);
    if (!id) {
        return res.status(400).json({error: 'Incorrect id'});
    }

    var user = users.filter( user => {
        return user.id === id;
    })[0];

    if (!user) {
        return res.status(400).json({error: 'Unknown id'});
    }

    user.name = req.body.name;
    user.eMail = req.body.eMail;
    user.phoneNum = req.body.phoneNum;
    user.position = req.body.position;

    users.forEach( item => {
        if (item.id === user.id) {
            item.name = user.name;
            item.eMail = user.eMail;
            item.phoneNum = user.phoneNum;
            item.position = user.position;
        }
    });

    res.status(201).json(users);

});


module.exports = router;
