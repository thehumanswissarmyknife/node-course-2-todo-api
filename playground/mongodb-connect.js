// const MongoClient = require('mongodb').MongoClient;

const {MongoClient, ObjectID} = require('mongodb');

var obj = new ObjectID();
console.log('ObjectID: ', obj);

MongoClient.connect('mongodb://localhost:30001/TodoApp', (err, db) => {
	if (err){
		return console.log('Unable to connect to MongoDB server');
	}
	console.log('Connected to MongoDB server');

	// db.collection('Todos').insertOne({
	// 	text: 'Something to do',
	// 	completed: false

	// }, (err, result) => {
	// 	if (err) {
	// 		return console.log('Unable to insert todo', err);
	// 	}
	// 	console.log(JSON.stringify(result.ops, undefined, 2));
	// });

// db.collection('Users').insertOne({
// 	name: 'dvocke',
// 	age: 39,
// 	location: 'Hamburg'
// }, (err, result) => {
// 	if (err){
// 		return console.log('Unable to create new user', err);
// 	}
// 	console.log(JSON.stringify(result.ops, undefined, 1));
// 	console.log(result.ops[0]._id.getTimestamp());
// });

	db.close();
});