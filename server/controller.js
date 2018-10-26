const { Songs } = require ('../database/models');

const controller = {
    get: (req, res) => {
        Songs.find({}, (err, songs) => {
            if (err) {
                console.error(err)
            } else {
                res.status(200).send(songs)
            }
        })
    },
    post: (req, res) => {
       const { songName,
                artist,
                likeCount,
                playsCount,
                repostCount
            } = req.body;
        
        new Songs (req.body)
            .save((err, newSong) => {
                if (err) {
                    console.error(err)
                } else {
                    res.status(201).send(newSong)
                }
            })
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