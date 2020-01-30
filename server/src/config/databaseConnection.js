const MongoClient = require('mongodb').MongoClient;

let mongoDB;

const setupDB = callback => {
  const uri = "mongodb+srv://rphill26:Balebale123@jury-box-5vmxd.mongodb.net/test?retryWrites=true&w=majority";

  MongoClient.connect(
    uri,
    { useNewUrlParser: true, useUnifiedTopology: true },
    (err, client) => {
      
      if (err) {
        return callback(err);
      } else {
        console.log(client);
        mongoDB = client.db('full-stack-server');
        return callback('DB OK');
      }
    }
  );
};

const getDB = () => {
  return mongoDB;
};

module.exports = { setupDB, getDB };