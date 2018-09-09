// const MongoClient = require('mongodb').MongoClient;

const {MongoClient, ObjectID } = require('mongodb');

// var obj = new ObjectID();
// console.log(obj);

MongoClient.connect( 'mongodb://localhost:27017/ToDoApp', (err, db) => {
    if (err) {
      return console.log('Unable to Connect to MongoDB Server');
    }
    console.log('Connected to MongoDB Server');

    //deleteMany -: DELETE MULTIPLE ITEMS AT ONCE
    // db.collection('Todos').deleteMany({text: 'Eat Lunch'}).then((result) => {
    //   console.log(result);  // result: { n: 3, ok:1 }
    // })
    //deleteOne -: DELETE THE FIRST ITEM YOU FIND AND THEN STOP
    // db.collection('Todos').deleteOne({text: 'Eat Lunch'}).then((results) => {
    //     console.log(results);
    // })

    //findOneAndDelete -: Delete the data and get deleted data.
    // db.collection('Todos').findOneAndDelete({completed: false}).then( (result) => {
    //   console.log(result);
    // }, () => {});
    // db.close();

    //Challenge
    //deleteMany
    // db.collection('Users').deleteMany({name: 'Ravinder'}).then( (result) => { console.log(result);}, () =>{});
    //findOneAndDelete with ID
    db.collection('Users').findOneAndDelete({ _id: new ObjectID('5b94cabd27a6b59164ae5536')}).then( (result) => {console.log(result);}, (err) =>{});
});
