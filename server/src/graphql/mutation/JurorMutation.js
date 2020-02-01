const { jurorType } = require("../nodeTypes");
const { 
    GraphQLString,
    GraphQLBoolean,
    GraphQLInt,
    GraphQLID
} = require("graphql");
 const JurorService = require("../../services/JurorService");

const CreateJurorMutation = {
    type: jurorType,
    args: {
        name: { type: GraphQLString },
        rating: { type: GraphQLString },
        political: { type: GraphQLString },
        education: { type: GraphQLString },
        employment: { type: GraphQLString }
    },
    resolve: async (_, { name, rating, political, education, employment }) => {
        const jurorService = new JurorService();
        const newJuror = await jurorService.createJuror({ name, rating, political, education, employment });

        return newJuror;
    }
};

const DeleteJurorMutation = {
    type: GraphQLID,
    args: {
        _id: { type: GraphQLID }
    },
    resolve: async (_, { _id }) => {
        const jurorService = new JurorService();
        const res = await jurorService.deleteJuror(_id);

        if (res.ok) { 
            return _id;
         }
    }
};

const UpdateJurorMutation = { 
    type: jurorType,
    args: { 
        _id: { type: GraphQLID },
        name: { type: GraphQLString },
        rating: { type: GraphQLString },
        political: { type: GraphQLString },
        education: { type: GraphQLString },
        employment: { type: GraphQLString }
     },
     resolve: async (_, { _id, name, rating, political, education, employment }) => {
         const jurorService = new JurorService();
         const updatedJuror = await jurorService.updateJuror(_id, { name, rating, political, education, employment });

         return updatedJuror;
     }
 };

 module.exports = { CreateJurorMutation, UpdateJurorMutation, DeleteJurorMutation };