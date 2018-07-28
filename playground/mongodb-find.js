const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        return console.log('Unable to connect to MongoDB server.');
    }
    console.log('Connected to MongoDB server'); 

    // db.collection('Todos').find({ 
    //   _id: new ObjectID('5b5ce4c829ea8853d20fc3d5')
    // }).toArray().then((docs) => {
    //     console.log('Todos:');
    //     console.log(JSON.stringify(docs, undefined, 2));    
    // }, (err) => {
    //     console.log('Unable to fetch todos', err);
    // })

    // db.collection('Todos').find({ completed: false }).each((err, item) => {
    //   if (err) {
    //     return console.log(`Error: ${err}`);
    //   } else if (item == null) {
    //     console.log(`That's it! We're all done.`);
    //     return db.close();
    //   }
    //   console.log(item.text);
    // })

    db.collection('Users').find({name: "Avi"}).toArray().then((result) => {
      console.log(JSON.stringify(result, undefined, 2));
    }).catch((err) => {
      console.log('Unable to fetch users', err);  
    });

    // db.close();

});
