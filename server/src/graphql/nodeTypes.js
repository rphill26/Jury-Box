const { GraphQLObjectType, GraphQLID, GraphQLString } = require("graphql");

const jurorType = new GraphQLObjectType ({
    name: 'Juror',
    fields: {
        _id: { type: GraphQLID },
        content: { type: GraphQLString }
    }
});

module.exports = { jurorType };