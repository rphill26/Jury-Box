const express = require("express");
const graphqlHTTP = require("express-graphql");
const schema = require("./graphql/schema");
const { setupDB } = require("../src/config/databaseConnection");
const cors = require("cors");

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

app.listen(4000);
console.log("SERVER OKAY!");