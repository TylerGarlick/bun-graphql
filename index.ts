import { createSchema } from 'graphql-yoga'
import { createServer } from 'node:http'
import { createYoga } from 'graphql-yoga'
import { typeDefs as scalarTypeDefs } from 'graphql-scalars';

export const schema = createSchema({
  typeDefs: [
    scalarTypeDefs,
    /* GraphQL */ `
    type Query {
      hello: String
    }
  `,],
  resolvers: {
    Query: {
      hello: () => 'world'
    }
  }
})


const yoga = createYoga({ schema })
 
// Pass it into a server to hook into request handlers.
const server = createServer(yoga)
 
// Start the server and you're done!
server.listen(4000, () => {
  console.info('Server is running on http://localhost:4000/graphql')
})

