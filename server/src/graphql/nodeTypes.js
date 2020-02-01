const { GraphQLObjectType, GraphQLID, GraphQLString } = require("graphql");

const jurorType = new GraphQLObjectType ({
    name: 'Juror',
    fields: {
        _id: { type: GraphQLID },
        name: { type: GraphQLString },
        rating: { type: GraphQLString },
        political: { type: GraphQLString },
        education: { type: GraphQLString },
        employment: { type: GraphQLString }
    }
});


module.exports = { jurorType };