const users = require('../models').users_model;

module.exports = {

    list(req, res) {
        return users
            .findAll({})
            .then((user_project) => res.status(200).send(user_project))
            .catch((error) => { res.status(400).send(error); });
    },
};