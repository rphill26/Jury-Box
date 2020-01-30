const express = require("express");
const graphqlHTTP = require("express-graphql");
const schema = require("./graphql/schema");
const { setupDB } = require("../src/config/databaseConnection");
const cors = require("cors");

var PORT = process.env.PORT || 4000;


const app = express();
setupDB(v => console.log(v));

app.use(cors());
app.use(
    '/graphql',
    graphqlHTTP({
        schema,
        graphql: true,
        pretty: true
    })
    );
    
    if (process.env.NODE_ENV === 'production') {
        app.use(express.static('client/build'));
    }
    app.get('*', (request, response) => {
        response.sendFile(path.join(__dirname, 'client/build', 'index.html'));
    });
    
    app.listen(PORT);
console.log("SERVER OKAY!");