const tasks = require('../models').tasks_model;

module.exports ={

    list (req, res) {
        return tasks
            .findAll({})
            .then((tank) => res.status(200).send(tank))
            .catch((error) => { res.status(400).send(error); });
    }
}