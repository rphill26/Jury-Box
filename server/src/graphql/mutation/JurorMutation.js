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
        content: { type: GraphQLString }
    },
    resolve: async (_, { content }) => {
        const jurorService = new JurorService();
        const newJuror = await jurorService.createJuror({ content });

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
        content: { type: GraphQLString }
     },
     resolve: async (_, { _id, content }) => {
         const jurorService = new JurorService();
         const updatedJuror = await noteService.updateJuror(_id, { content });

         return updatedJuror;
     }
 };

 module.exports = { CreateJurorMutation, UpdateJurorMutation, DeleteJurorMutation };