const {Router} = require('express');
const SuperpowerController = require('../controllers/Superpower.controller');
const pagination = require('../middlewares/pagination.mw');

const superpowerRouter = Router();

superpowerRouter.post('/', SuperpowerController.createSuperpower);
superpowerRouter.get('/', pagination, SuperpowerController.getAllSuperpowers);
superpowerRouter.get('/:powerId', SuperpowerController.getOneSuperpower);
superpowerRouter.delete('/:powerId', SuperpowerController.deleteSuperpower);

module.exports = superpowerRouter;