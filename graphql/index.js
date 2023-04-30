import { createPubSub, createSchema, createYoga } from 'graphql-yoga';
import { createServer } from 'node:http';
import { typeDefs } from './schema/schema.graphql.mjs';
import { Query } from './resolvers/Query.mjs';
import { Mutation } from './resolvers/Mutation.mjs';
import { Subscription } from './resolvers/Subscription.mjs';
import { Cv } from './resolvers/Cv.mjs';
import { db } from "./Database/db.mjs";
import { PubSub } from 'graphql-subscriptions';

export const pubSub = new PubSub();
const yoga = createYoga({
  schema: createSchema({
    typeDefs,
    resolvers: {
      Query,Cv,Mutation,Subscription
    },
  }),
  context:{
    db,
    pubSub 
  }
});

const server = createServer(yoga);

server.listen(4000, () => {
  console.info('Server is running on http://localhost:4000/graphql');
});
