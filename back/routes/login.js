const {Router} = require('express');
const router = Router();

const login = require('../controllers/controllerLogin');

router.get('/', login);

module.exports = router;