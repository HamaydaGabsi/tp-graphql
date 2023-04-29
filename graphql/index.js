import { createSchema, createYoga } from 'graphql-yoga';
import { createServer } from 'node:http';
import { typeDefs } from './schema/schema.graphql.mjs';
import { Query } from './resolvers/Query.mjs';
import { Cv } from './resolvers/Cv.mjs';
import { db } from "./Database/db.mjs";
// import { users } from './resolvers/users.mjs';
const yoga = createYoga({
  schema: createSchema({
    typeDefs,
    resolvers: {
      Query,Cv
    },
  }),
  context:{
    db
  }
});

const server = createServer(yoga);

server.listen(4000, () => {
  console.info('Server is running on http://localhost:4000/graphql');
});
