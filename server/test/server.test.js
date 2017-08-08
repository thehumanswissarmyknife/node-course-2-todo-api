const expect = require('expect');
const request = require('supertest');
var {ObjectID} = require('mongodb');

var {app} = require('./../server');
var {Todo} = require('./../models/todo');

const todos = [{
	_id: new ObjectID(), 
	text: 'First todo'
}, {
	_id: new ObjectID(),
	text: 'second todo'
}, {
	_id: new ObjectID(),
	text: 'Third todo'
}];

beforeEach((done) => {
	Todo.remove({}).then(() => {
		Todo.insertMany(todos);
	}).then(() => {
		done()
	});
});



describe('POST /todos', () => {
	it('should create a new todo', (done) => {
		var text = 'Text for test';

		request(app)
		.post('/todos')
		.send({text})
		.expect(200)
		.expect((res) => {
			expect(res.body.text).toBe(text);
		})
		.end((err, res) => {
			if (err) {
				return done(err);
			}
			Todo.find({text}).then((todos) => {
				expect(todos.length).toBe(1);
				expect(todos[0].text).toBe(text);
				done();
			}).catch((e) => done(e));
		});
	});

	it('should reject bad posts', (done) => {
		request(app)
		.post('/todos')
		.send({})
		.expect(400)
		.end((err, res) => {
			if(err){
				return done(err);
			}
			Todo.find().then((todos) => {
				expect(todos.length).toBe(3);
				done();
			}).catch((e) => done(e));
		});

	});
});

describe('GET /todos', () => {
	it ('should get all todos', (done) => {
		request(app)
		.get('/todos')
		.expect(200)
		.expect((res) => {
			expect(res.body.todos.length).toBe(3);
		})
		.end(done);
	});
}); 

describe('GET /todo/:id', () => {
	it('should catch badly formed ids with a 404', (done) => {
		request(app)
		.get(`/todo/123`)
		.expect(404)
		.end(done);
	});

	it('should throw 404 when no todo is found', (done) => {
		request(app)
		.get(`/todos/${new ObjectID().toHexString}/123`)
		.expect(404)
		.end(done);
	});

	it('should return todo, if it\'s found', (done) => {
		request(app)
			.get(`/todos/${todos[0]._id.toHexString()}`)
			.expect(200)
			.expect((res) => {
				expect(res.body.todo.text).toBe(todos[0].text)
			})
			.end(done);
	});
});