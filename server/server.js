var express = require('express');
var bodyParser = require('body-parser');

var { mongoose } = require('./db/mongoose');
var {ToDo} = require('./models/todo');
var {User} = require('./models/user');

var app = express();

app.use(bodyParser.json());

app.post('/todos', (req,res) =>{

  var toDo = new ToDo({
    text: req.body.text
  });

  toDo.save().then( (result)=> {
    res.status(200).send(result);
  }, (e) => {
    res.status(400).send(e);
  });

});

app.listen(3000, () => {
  console.log('Server Started Successfully on Port 3000');
});
