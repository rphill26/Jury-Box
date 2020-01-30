const { GraphQLSchema, GraphQLObjectType } = require("graphql");
const { JurorQuery } = require("./query/JurorQuery");
const {
    CreateJurorMutation,
    UpdateJurorMutation,
    DeleteJurorMutation
} = require("./mutation/JurorMutation");

const QueryType = new GraphQLObjectType({
    name: "Query",
    fields: () => ({
        jurors: JurorQuery
    })
});

const MutationType = new GraphQLObjectType ({
    name: "Mutation",
    fields: () => ({
        createJuror: CreateJurorMutation,
        deleteJuror: DeleteJurorMutation,
        updateJuror: UpdateJurorMutation
    })
});

const schema = new GraphQLSchema({ query: QueryType, mutation: MutationType });

module.exports = schema;