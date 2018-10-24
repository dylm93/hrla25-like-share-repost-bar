const { Songs } = require ('../database/models');

const controller = {
    get: (req, res) => {
        Songs.findAll({})
            .then(data => res.status(200).send(data))
            .catch(err => console.error(err))
    },
    post: (req, res) => {
        const { name } = req.body
        Songs.create({name: name})
            .then(data => res.status(201).send(data))
            .catch(err => console.error(err))
    },
    update: (req, res) => {
        const {name, newName} = req.body;
        Songs.update({name: newName},
            {where: {name}})
        .then(data => res.status(202).send('Songs updated'))
        .catch(err => console.error(err))

    },
    delete: (req, res) => {
        const { name } = req.query;
        Songs.destroy({
            where: { name }
        })
        .then(data => res.status(203).send('deleted'))
        .catch((err) => console.error(err))
    }  

}

module.exports = controller;