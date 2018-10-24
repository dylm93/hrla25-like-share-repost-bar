const connection = require ('./');
const Sequelize = require ('sequelize');

const Songs = connection.define (
'Songs',
 {
    id: {type: Sequelize.INTEGER, primaryKey: true, allowNull: false, autoIncrement: true},
    songName: {type: Sequelize.STRING},
    artist: {type: Sequelize.STRING},
    likeCount: {type: Sequelize.STRING},
    playsCount: {type: Sequelize.STRING},
    repostCount: {type: Sequelize.STRING}
},
{
    timestamps: false
}
)

connection
    .sync()
    .then(()=> console.log ('synced to mysql db'))
    .catch(err => console.error(err))

module.exports = { Songs };