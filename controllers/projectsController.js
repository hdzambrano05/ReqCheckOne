const projects = require('../models').projects_model;

module.exports = {

    list(req, res) {
        return projects
            .findAll({})
            .then((project) => res.status(200).send(project))
            .catch((error) => { res.status(400).send(error); });
    },
};
