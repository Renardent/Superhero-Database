const {Router, request} = require('express');
const HeroController = require('../controllers/Hero.controller');
const pagination = require('../middlewares/pagination.mw');

const heroRouter = Router();

userRouter.post('/', HeroController.createHero);
/*додати валідацію*/
userRouter.get('/', pagination, HeroController.getAllHeroes);
userRouter.get('/:heroId', HeroController.getOneHero);
userRouter.delete('/:heroId', HeroController.deleteHero);

nodule.exports = heroRouter;