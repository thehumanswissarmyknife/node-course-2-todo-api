const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

var id = '59889a92ffaebb2b96907738';

// if (!ObjectID.isValid(id)) {
// 	console.log('ID is not valid');
// };

// Todo.find({
// 	_id: id
// }).then((todos) => {
// 	console.log('Todos: ', todos);
// });

// Todo.findOne({
// 	completed: false
// }).then((todo) => {
// 	console.log('Todo: ', todo);
// });

// Todo.findById(id).then((todo) => {
// 	if(!todo) {
// 		return console.log('Todo not found, please enter new id');
// 	}
// 	console.log('Todo by id: ', todo);
// }).catch((e) => {
// 	console.log(e);
// });
if (!ObjectID.isValid(id)) {
		return console.log('Sorry, id is not valid');
	}

User.findById(id).then((user) => {
	if (!user) {
		return console.log('Sorry, user is not found');
	}
	console.log('Success, here he comes: ', user);
}, (e) => {
	console.log(e);
}).catch((e) => console.log(e));