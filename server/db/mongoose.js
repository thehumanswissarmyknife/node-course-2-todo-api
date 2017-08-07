var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:30001/TodoApp');

module.exports = {mongoose};