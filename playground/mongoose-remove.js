const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

Todo.findByIdAndRemove(new ObjectID('5989c7cbaf31e012ba84b0d3')).then((todo) => {
	if(!todo) {
		return console.log('no item with that id');
	}
	Todo.insert({todo});
});