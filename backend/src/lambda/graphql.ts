import { GraphQLServerLambda } from 'graphql-yoga';

const typeDefs = `
  type Query {
    hello(name: String): String
  }
`

const resolvers = {
  Query: {
    hello: (_, { name }) => `Hello ${name || 'world'}`,
  },
}

const lambda = new GraphQLServerLambda({
  typeDefs,
  resolvers,
})
// TODO: not sure if this works, the Netlify docs say you need to export a handler method.
exports.server = lambda.graphqlHandler
exports.playground = lambda.playgroundHandler
