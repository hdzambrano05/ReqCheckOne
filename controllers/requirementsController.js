//const { text } = require('express');
//const { add } = require('./commentsController');
//const { version } = require('react');

const { update } = require('./commentsController');

const requirements = require('../models').requirements_model;

module.exports = {

    list(req, res) {
        return requirements
            .findAll({})
            .then((requirement) => res.status(200).send(requirement))
            .catch((error) => { res.status(400).send(error); });
    },

    getById(req, res) {
        return requirements
            .findByPk(req.params.id)
            .then((requirement) => {
                if (!requirement) {
                    return res.status(404).send({
                        message: 'Requirement Not Found',
                    });
                }
                return res.status(200).send(requirement);
            })
            .catch((error) => res.status(400).send(error));
    },

    add(req, res) {
        return requirements
            .create({
                project_id: req.body.project_id,
                title: req.body.title,
                text: req.body.text,
                context: req.body.context,
                status: req.body.status,
                priority: req.body.priority,
                due_date: req.body.due_date,
                version: req.body.version,
                analysis: req.body.analysis,
                created_by: req.body.created_by,

            })
            .then((requirement) => res.status(201).send(requirement))
            .catch((error) => res.status(400).send(error));
    },

    update(req, res) {
        return requirements
            .findByPk(req.params.id)
            .then(requirements => {
                if (!requirements) {
                    return res.status(404).send({
                        message: 'Requirement Not Found',
                    });
                }
                return requirements
                    .update({
                        project_id: req.body.project_id || requirements.project_id,
                        title: req.body.title || requirements.title,
                        text: req.body.text || requirements.text,
                        context: req.body.context || requirements.context,
                        status: req.body.status || requirements.status,
                        priority: req.body.priority || requirements.priority,
                        due_date: req.body.due_date || requirements.due_date,
                        version: req.body.version || requirements.version,
                        analysis: req.body.analysis || requirements.analysis,
                        created_by: req.body.created_by || requirements.created_by,
                    })
                    .then(() => res.status(200).send(requirements))
                    .catch((error) => res.status(400).send(error));
            })
            .catch((error) => res.status(400).send(error));
    },

    delete(req, res) {
        return requirements
            .findByPk(req.params.id)
            .then(requirements => {
                if (!requirements) {
                    return res.status(404).send({
                        message: 'Requirement Not Found',
                    });
                }
                return requirements
                    .destroy()
                    .then(() => res.status(204).send())
                    .catch((error) => res.status(400).send(error));
            })
            .catch((error) => res.status(400).send  (error));
    }
};