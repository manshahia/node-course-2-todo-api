const expect = require('expect');
const request = require('supertest');

const {app} = require('./../server');
const {ToDo} = require('./../models/todo');
//
// beforeEach((done) => {
//   Todo.remove({}).then( () => done());
// });
// var beforeEach = require('mocha').beforeEach;
// describe("the outer context", function () {
//   beforeEach(function() {
//     this.didRunBeforeEach = true;
//     done();
//   });

describe('POST /todos', () => {
  it('should create a new todo', (done) => {
    var text = 'Test todo text';

    requst(app)
      .post('/todos')
      .send({ text })
      .expect(200)
      .expect( (res) => {
        expect(res.body.text).toBe(text);
      })
      .end((err,res) => {
        if(err) { return done(err);}

        Todo.find().then((todos) => {
          expect(todos.length).toBe(1);
          expect(todos[0].text).toBe(text);
          done();
        }).catch( (e) => done(e));
      });
  });
});
