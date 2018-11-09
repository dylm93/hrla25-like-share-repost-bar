const mongoose = require ('mongoose');
const mongoUri = 'mongodb://localhost:3001/lrs-bar';

const connection = mongoose.connect(mongoUri);

module.exports = connection;