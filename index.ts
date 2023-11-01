import { createSchema, createYoga } from 'graphql-yoga'
import { createServer } from 'node:http'
import { typeDefs as scalarTypeDefs } from 'graphql-scalars'

const { PORT: port = `3000` } = Bun.env

const PORT = parseInt(port)

export const schema = createSchema({
  typeDefs: [
    scalarTypeDefs,
    /* GraphQL */ `
      type Query {
        hello: String
      }
    `,
  ],
  resolvers: {
    Query: {
      hello: () => 'world',
    },
  },
})

const yoga = createYoga({ schema, landingPage: true, graphiql: true })

// Pass it into a server to hook into request handlers.
const server = createServer(yoga)

// Start the server and you're done!
server.listen(PORT, () => {
  console.info(`Server is running on http://localhost:${PORT}/graphql`)
})
