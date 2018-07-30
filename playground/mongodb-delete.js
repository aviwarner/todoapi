const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        return console.log('Unable to connect to MongoDB server.');
    }
    console.log('Connected to MongoDB server'); 
    
    // deleteMany
    // db.collection('Todos').deleteMany({ 
    //   text: "Eat lunch"
    // }).then((res) => {
    //   console.log(res);
    // }).catch((err) => {
      
    // });;
    // deleteOne
    // db.collection('Todos').deleteOne({ 
    //   text: "Eat lunch"
    // }).then((res) => {
    //   console.log(res);
    // }).catch((err) => {
      
    // });
    // findOneAndDelete
    // db.collection('Todos').findOneAndDelete({
    //   completed: false
    // }).then((result) => {
    //   console.log(result);
      
    // }).catch((err) => {
      
    // });

    db.collection('Users').findOneAndDelete({
       _id: new ObjectID("5b5ceae552f99f56267e3e76") 
      }).then((result) => {
        console.log(JSON.stringify(result, undefined, 2));
      }).catch((err) => {
        
      });;

    db.collection('Users').deleteMany({
       name: "Avi"
      });
    // db.close();
});
