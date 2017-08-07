var express = require('express');
var bodyParser = require('body-parser');

var {mongoose} = require('./db/mongoose');
var {Todo} = require('./models/todo');
var {User} = require('./models/user');

var app = express();
var listeningPort = 3000;

app.use(bodyParser.json());

app.post('/todos', (req, res) => {
	var todo = new Todo({
		text: req.body.text
	});

	todo.save().then((doc)=> {
		res.send(doc);
	}, (e) => {
		res.status(400).send(e);
	});
});

app.listen(listeningPort, () => {
	console.log(`Listening on port ${listeningPort}`);
});