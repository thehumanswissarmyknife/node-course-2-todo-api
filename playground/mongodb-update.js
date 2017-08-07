// const MongoClient = require('mongodb').MongoClient;

const {MongoClient, ObjectID} = require('mongodb');


MongoClient.connect('mongodb://localhost:30001/TodoApp', (err, db) => {
	if (err){
		return console.log('Unable to connect to MongoDB server');
	}
	console.log('Connected to MongoDB server');

	// db.collection('Todos').findOneAndUpdate({
	// 	text: 'walking the dog'}, {
	// 		$set: {
	// 			completed: false
	// 		}
	// 	}, {
	// 		returnOriginal: false
	// 	}).then((result) => {
	// 		console.log(result);
	// 	});

		db.collection('Users').findOneAndUpdate({
			_id: new ObjectID('5988678c781b7a97940943ef')
		}, {
			$set: {name: 'Roehrig'},
			$inc: {age: 1}
		}, {
			returnOriginal: false
		}).then((result) => {
			console.log(result);
		});

	db.close();
});