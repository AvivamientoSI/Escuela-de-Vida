const {Router} = require('express');
const router = Router();

const home = require('../controllers/controllerHome')

router.get('/', home);

module.exports = router;