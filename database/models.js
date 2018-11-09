const connection = require ('./');
const mongoose = require ('mongoose');

const artistsSchema = mongoose.Schema (
 {
    songName: {type: String},
    artist: {type: String},
    likeCount: {type: Number},
    playsCount: {type: Number},
    repostCount: {type: Number},
    albumArt: {type: String},
    releasedBy: {type: String}
},
{
    timestamps: false
}
)

const Artists = mongoose.model('Artists', artistsSchema)

module.exports = { Artists };