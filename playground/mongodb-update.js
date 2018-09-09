// const MongoClient = require('mongodb').MongoClient;

const {MongoClient, ObjectID } = require('mongodb');

// var obj = new ObjectID();
// console.log(obj);

MongoClient.connect( 'mongodb://localhost:27017/ToDoApp', (err, db) => {
    if (err) {
      return console.log('Unable to Connect to MongoDB Server');
    }
    console.log('Connected to MongoDB Server');

    db.collection('Users').findOneAndUpdate(
    /*filter*/ {
    _id: new ObjectID("5b93c93658c84731dcb01e47")
  },
/*update*/ { //User mongodb updateOperator
  $set: { name: 'Ravs'},
  $inc: { age: 1 }

},
/*options*/{
  returnOriginal: false
}).then( (res)=>{
  console.log(res);
},(err)=>{console.log("-------\n\tERROR\n------\n",err)});
    // //findOneAndUpdate
    // db.collection('Todos').findOneAndUpdate({
    //   //Filter
    //   _id : new ObjectID("5b93da1827a6b59164ae4d77")
    // },{
    //   //Actual Update
    //   $set: {completed: false }
    // }, {
    //   //Options
    //   returnOriginal: false
    // }).then((result) => {
    //   console.log(result);
    // });
});
