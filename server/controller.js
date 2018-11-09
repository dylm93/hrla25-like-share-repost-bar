const { Artists } = require ('../database/models');

const controller = {
    get: (req, res) => {
        Artists.find({}, (err, songs) => {
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
        
        new Artists (req.body)
            .save((err, newSong) => {
                if (err) {
                    console.error(err)
                } else {
                    res.status(201).send(newSong)
                }
            })
    },
    incrementLikes: (req, res) => {
            const id = req.params.id
            console.log('************', id)
            
            Artists.findByIdAndUpdate({_id : id}, { $inc: {likeCount: 1 }})
              .then( function (song) {
                console.log('incremented count')
                res.send(song)
              })
            
    },

    decrementLikes: (req, res) => {
        const id = req.params.id
        console.log('************', id)
        
        Artists.findByIdAndUpdate({_id : id}, { $inc: {likeCount: -1 }})
          .then( function (song) {
            console.log('incremented count')
            res.send(song)
          })
        
    },

    incrementReposts: (req, res) => {
        const id = req.params.id
            
            Artists.findByIdAndUpdate({_id : id}, { $inc: {repostCount: 1 }})
              .then( function (song) {
                console.log('incremented count')
                res.send(song)
              })
            
    },

    decrementReposts: (req, res) => {
        const id = req.params.id
            
            Artists.findByIdAndUpdate({_id : id}, { $inc: {repostCount: -1 }})
              .then( function (song) {
                console.log('incremented count')
                res.send(song)
              })
            
    },

    getLikesReposts: (req, res) => {
            const id = req.params.id
            console.log('************', id)
        
            Artists.findById({_id : id})
                .then( function (song) {
                console.log('incremented count')
                res.send(song)
          })


    },

    delete: (req, res) => {
        const { name } = req.query;
        Artists.destroy({
            where: { name }
        })
        .then(data => res.status(203).send('deleted'))
        .catch((err) => console.error(err))
    }  

}

module.exports = controller;