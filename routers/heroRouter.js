const {Router} = require('express');
const HeroController = require('../controllers/Hero.controller');
const pagination = require('../middlewares/pagination.mw');

const heroRouter = Router();

heroRouter.post('/', HeroController.createHero);
heroRouter.get('/', pagination, HeroController.getAllHeroes);
heroRouter.get('/:heroId', HeroController.getOneHero);
heroRouter.delete('/:heroId', HeroController.deleteHero);

module.exports = heroRouter;