var express = require('express');
var bodyParser = require('body-parser');

var {mongoose} = require('./db/mongoose');
var {Todo} = require('./models/todo');
var {User} = require('./models/user');

var {ObjectID} = require('mongodb');

var app = express();
var listeningPort = process.env.PORT || 3000;

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

app.get('/todos/:id', (req, res) => {
	var id = req.params.id;

	if (!ObjectID.isValid(id)) {
		return res.status(404).send({error: `id ${id} not valid`});
	}

	Todo.findById(id).then((todo) => {
		if(!todo) {
			return res.status(404).send({});
		}
		res.status(200).send({todo, status: 'ok'});
	}, (e) => {
		res.status(400).send({});
	});
});

app.get('/todos', (reg, res) => {
	Todo.find().then((todos) => {
		res.send({todos})
	}, (e) => {
		res.status(400).send(e);
	});
});

app.delete('/todos/:id', (req, res) => {
	var id = req.params.id;

	if(!ObjectID.isValid) {
		return res.status(404).send({});
	}

	Todo.findByIdAndRemove(id).then((todo) => {
		if(!todo) {
			return res.status(404).send({});
		}
		res.status(200).send({todo});
	}).catch((e) => {
		res.status(400).send({});
	});
})

app.listen(listeningPort, () => {
	console.log(`Listening on port ${listeningPort}`);
});

module.exports = {app};