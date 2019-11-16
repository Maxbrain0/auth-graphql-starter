const graphql = require('graphql');
const { GraphQLObjectType, GraphQLString } = graphql;

const UerType = new GraphQLObjectType({
  name: 'UserType',
  fields: {
    email: { type: GraphQLString }
  }
});

module.exports = UserType;
