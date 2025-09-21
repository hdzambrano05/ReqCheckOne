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

    add(req, res) {
        return users
            .create({
                username: req.body.username,
                email: req.body.email,
                password_hash: req.body.password_hash,
                role: req.body.role,

            })
            .then((users) => res.status(201).send(users))
            .catch((error) => res.status(400).send(error));
    },

    update(req, res) {
        return users
            .findByPk(req.params.id)
            .then(users => {
                if (!users) {
                    return res.status(404).send({
                        message: 'users Not Found',
                    });
                }
                return users
                    .update({
                        username: req.body.username || users.username,
                        email: req.body.email || users.email,
                        password_hash: req.body.password_hash || users.password_hash,
                        role: req.body.role || users.role,
                    })
                    .then(() => res.status(200).send(users))
                    .catch((error) => res.status(400).send(error));
            })
            .catch((error) => res.status(400).send(error));
    },

    delete(req, res) {
        return users
            .findByPk(req.params.id)
            .then(users => {
                if (!users) {
                    return res.status(404).send({
                        message: 'users Not Found',
                    });
                }
                return users
                    .destroy()
                    .then(() => res.status(204).send())
                    .catch((error) => res.status(400).send(error));
            })
            .catch((error) => res.status(400).send(error));
    },    
}; 
