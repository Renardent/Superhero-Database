const {Router} = require('express');
const heroRouter = require('./heroRouter');
const superpowerRouter = require('./superpowerRouter');

const router = Router();
router.use('/heroes', heroRouter);
// router.use('/powers', superpowerRouter);


module.exports = router;