const user_projects = require('../models').user_projects_model;

module.exports = {

    list(req, res) {
        return user_projects
            .findAll({})
            .then((user_project) => res.status(200).send(user_project))
            .catch((error) => { res.status(400).send(error); });
    },
};