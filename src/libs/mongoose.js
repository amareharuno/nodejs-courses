let mongoose = require('mongoose');
let config = require('');

mongoose.connect(config.get('mongoose:uri'), config.get('mongoose:options'));

module.exports = mongoose;