// const MongoClient = require('mongodb').MongoClient;

const {MongoClient, ObjectID } = require('mongodb');

// var obj = new ObjectID();
// console.log(obj);

MongoClient.connect( 'mongodb://localhost:27017/ToDoApp', (err, db) => {
    if (err) {
      return console.log('Unable to Connect to MongoDB Server');
    }
    console.log('Connected to MongoDB Server');


    // db.collection('Todos').find({ _id: new ObjectID('5b93c7ea5533e54534d5524a')}).toArray().then( (docs) => {
    // // db.collection('Todos').find({ completed: false}).toArray().then( (docs) => {
    //   console.log('Todos');
    //   console.log(JSON.stringify(docs, undefined, 2));
    // }, (err) => {
    //   console.log("Unable to fetch todos : ",err);
    // });
    //

    db.collection('Users').find({ name: 'Ravinder'}).toArray().then( (docs) => {
    // db.collection('Todos').find({ completed: false}).toArray().then( (docs) => {
      console.log('Todos Challenge');
      console.log(JSON.stringify(docs, undefined, 2));
    }, (err) => {
      console.log("Unable to fetch todos : ",err);
    });

    // db.collection('Todos').find().count().then( (count) => {
    // // db.collection('Todos').find({ completed: false}).toArray().then( (docs) => {
    //   console.log('Todos Count: ', count);
    //   console.log(JSON.stringify(docs, undefined, 2));
    // }, (err) => {
    //   console.log("Unable to fetch todos : ",err);
    // });



    // db.close();
});
