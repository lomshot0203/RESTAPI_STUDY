const express = require('express');
const controller = require('./controller/user.controller');
const router = express.Router();

/* GET users listing. */
router.get ('/', (req, res, next) => { /* GET /users */
    controller.index(req, res);
});

router.get ('/:id', (req, res, next) => { /* GET /users/1 */
    controller.show(req, res);
});

router.delete ('/:id', (req, res, next) => { /* DELETE /users/1 */
    controller.remove(req, res);
});

router.post ('/', (req, res, next) => { /*등록*/
    controller.create(req, res);
});

router.put('/:id', (req, res, next) => { /* 수정 */
    controller.modify(req, res);
});


module.exports = router;
