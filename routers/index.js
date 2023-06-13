const {Router} = require('express');
const heroRouter = require('./heroRouter');
const superpowerRouter = require('./superpowerRouter');

const router = Router();
router.use('/hero', heroRouter);
router.use('/power', superpowerRouter);


module.exports = router;