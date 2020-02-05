const { jurorType } = require("../nodeTypes");
const { GraphQLList } = require("graphql");
const JurorService = require("../../services/JurorService");

const JurorQuery = {
  type: GraphQLList(jurorType),
  args: {},
  resolve: async () => {
    const jurorService = new JurorService();
    const jurors = await jurorService.getAllJurors();

    return jurors;
  }
};

module.exports = { JurorQuery };
