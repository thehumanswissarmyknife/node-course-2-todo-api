// const MongoClient = require('mongodb').MongoClient;

const {MongoClient, ObjectID} = require('mongodb');


MongoClient.connect('mongodb://localhost:30001/TodoApp', (err, db) => {
	if (err){
		return console.log('Unable to connect to MongoDB server');
	}
	console.log('Connected to MongoDB server');

	// db.collection('Todos').find().toArray().then((docs) => {
	// 	console.log('Todos');
	// 	console.log(JSON.stringify(docs, undefined, 2));
	// }, (err) => {
	// 	console.log('could not retrieve any documents', err);
	// });

	// db.collection('Todos').find().count().then((count) => {
	// 	console.log(`Todos count: ${count}`);
	// }, (err) => {
	// 	console.log('could not retrieve any documents', err);
	// });

	var userName = 'dvocke';
	// db.collection('Users').find({name: userName}).count().then((count) => {
	// 	console.log(`Useres called ${userName}: ${count}`);
	// }, (err) => {
	// 	console.log(`No users called ${userName}`);
	// });

	// db.collection('Users').find({name: userName}).toArray().then((docs) => {
	// 	console.log(JSON.stringify(docs, undefined, 2));
	// });
	db.collection('Users').find({name: 'dvocke',age: {$lt:38}}).toArray().then((docs) => {
		console.log(JSON.stringify(docs, undefined, 2));
	}, (err) => {
		console.log(err);
	});

	db.close();
});