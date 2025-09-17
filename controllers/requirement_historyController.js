const requirement_history = require('../models').requirement_history_model;

module.exports = {

    list(req, res) {
        return requirement_history
            .findAll({})
            .then((requirement_history) => res.status(200).send(requirement_history))
            .catch((error) => { res.status(400).send(error); });
    },
};