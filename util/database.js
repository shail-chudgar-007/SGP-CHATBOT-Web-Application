const mongodb = require('mongodb');
const MongodbClient = mongodb.MongoClient;

let _db;

const mongoconnect = (client) =>{
    MongodbClient.connect('mongodb+srv://Shail_007:shail007@cluster0.7ehhg.mongodb.net/Railway?retryWrites=true&w=majority'
    ).then(client =>{
       // console.log(client);
        //console.log('Connected');
       _db = client.db();
        
    })
    .catch(err =>{
        console.log(err);
        throw err;
    });

};
const getDb = ()=>{
    if(_db){
        return _db;
    }
    throw 'No database found';
}
exports.mongoconnect = mongoconnect;
exports.getDb = getDb;


