const {Hero} = require('../models/Hero');
const pagination = require('../middlewares/pagination.mw');

module.exports.createHero = async (req,res,next) => {
    try {
        const {body} = req;
        const result = await Hero.create(body);

        console.log(result);
        return res.status(201).send(result);
    } catch(error) {
        next(error)
    }
}

module.exports.getOneHero = async (req,res,next) => {
    try {
        const {params: {id}} = req;
        const getOne = await Hero.getOneHero(id);
        return res.status(200).send(getOne);
    } catch(error) {
        next(error)
    }
}

module.exports.getAllHeroes = async (req,res,next) => {
    try {
        const {pagination} = req;
        const results = await Hero.getAllHeroes ({
            ...pagination
        });
        return res.status(200).send(results);
    } catch(error) {
        next(error)
    }
}

module.exports.deleteHero = async (req,res,next) => {
    try {
        const {params: {id}} = req;
        const deleted = await Hero.destroy({
            where: {
                id
            }
        });
        if (rowsCount) {
            return res.status(200).send('Successfull deleted');
        } else {
        return res.status(204).send();
    }
    } catch(error) {
        next(error)
    }
}


// module.exports.updateHero = async (req,res,next) => {
//     try {
//         const {params: {id}, body} = req;
//         const hero = await Hero.findByPk(id);
//         const result = await hero.update(body);
//         return res.status(200).send(result);
//     } catch(error) {
//         next(error);
//     }
// }