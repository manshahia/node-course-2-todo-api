// const MongoClient = require('mongodb').MongoClient;

const {MongoClient, ObjectID } = require('mongodb');

var obj = new ObjectID();
console.log(obj);

MongoClient.connect( 'mongodb://localhost:27017/ToDoApp', (err, db) => {
    if (err) {
      return console.log('Unable to Connect to MongoDB Server');
    }
    console.log('Connected to MongoDB Server');

    // db.collection('Todos').insertOne({
    //   text : 'Complete Two',
    //   completed: false
    // }, (err, result) => {
    //   if(err) {
    //     return console.log("Unable to insert ToDo", err);
    //   }
    //   console.log(JSON.stringify(result.ops, undefined, 2))
    // });


    //Insert new doc into Users {name, age, location}
    // db.collection('Users').insertOne({
    //   name : 'Ravinder',
    //   age : 29,
    //   location : 'Mansa'
    // }, (err,result) => {
    //   if(err) {
    //     return console.log("Unable to Insert: Error : ", err);
    //   }
    //   console.log(JSON.stringify(result.ops[0]._id.getTimestamp(), undefined, 2));
    // });

    db.close();
});
