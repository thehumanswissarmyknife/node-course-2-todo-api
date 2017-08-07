// const MongoClient = require('mongodb').MongoClient;

const {MongoClient, ObjectID} = require('mongodb');


MongoClient.connect('mongodb://localhost:30001/TodoApp', (err, db) => {
	if (err){
		return console.log('Unable to connect to MongoDB server');
	}
	console.log('Connected to MongoDB server');

	// //delete Many
	// db.collection('Todos').deleteMany({text: 'walk the dog'}).then((result) => {
	// 	console.log(result);
	// });

	// delete one

	// db.collection('Todos').deleteOne({text: 'walking the dog'}).then((result) => {
	// 	console.log(result);
	// });

	// find one and delete

	// db.collection('Todos').findOneAndDelete({completed: false}).then((result) => {
	// 	console.log(result);
	// });

	db.collection('Users').deleteMany({name: 'dvocke'}).then((result) => {
		console.log(result);
	});

	db.collection('Users').findOneAndDelete({
		_id: new ObjectID('598858a7f6e34622610b6b3a')
	}).then((result) => {
		console.log('User geloescht');
		console.log(result);
	});

	db.close();
});