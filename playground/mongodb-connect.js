//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');



MongoClient.connect('mongodb://localhost:27017/Todoapp', (err, db) =>{
  if (err) {
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Console to MongoDB server');


  // db.collection('Todos').insertOne({
  //   text: 'Something to do',
  //   completed: false
  // }, (err, result) =>{
  //   if (err){
  //     return console.log('Unable to insert logo', err)
  //   }
  //
  //   console.log(JSON.stringify(result.ops, undefined, 2));
  // });
  //
  // //Insert new doc into users (name, age, location)
  // db.collection('Users').insertOne({
  //   id: 123,
  //   name: 'Andrew',
  //   age: '25',
  //   location: 'Philadelphia'
  // }, (err, result) => {
  //     if (err){
  //       return console.log('Unable to insert user')
  //     }
  //
  //     console.log(result.ops[0]._id.getTimestamp());
  // });

  db.close();
});
