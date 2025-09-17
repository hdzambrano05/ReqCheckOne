const users = require('../models').users_model;

module.exports = {

    list(req, res) {
        return users
            .findAll({})
            .then((user_project) => res.status(200).send(user_project))
            .catch((error) => { res.status(400).send(error); });
    },
    getById(req, res) {

        console.log(req.params.id);
        return users
            .findByPk(req.params.id)
            .then((users) => {
                console.log(users);
                if (!users) {
                    return res.status(404).send({
                        message: 'users Not Found',
                    });
                }
                return res.status(200).send(users);
            })
            .catch((error) =>
                res.status(400).send(error));
    },
};