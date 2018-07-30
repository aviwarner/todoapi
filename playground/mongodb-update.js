const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        return console.log('Unable to connect to MongoDB server.');
    }
    console.log('Connected to MongoDB server'); 
    
    // db.collection('Todos').findOneAndUpdate({
    //   _id: new ObjectID("5b5e8228d0ce930607cea4b2")
    // }, {
    //   $set: {
    //     completed: true
    //   }
    // }, {
    //   returnOriginal: false
    // }).then((result) => {
    //   console.log(result);
    // }).catch((err) => {
      
    // });

    db.collection('Users').findOneAndUpdate({
      _id: new ObjectID("5b5ceae75e9a84562726c972")
    }, {
      $set: {
        name: "Avi"
      },
      $inc: {
        age: 100
      }
    }, {
      returnOriginal: false
    }).then((result) => {
      console.log(result); 
    }).catch((err) => {
      
    });
    // db.close();
});
