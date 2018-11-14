const mongoose = require('mongoose');

module.exports = mongoose.connect('mongodb://localhost/mean_belt', { useNewUrlParser: true } );