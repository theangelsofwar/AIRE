import { ApolloServer } from 'apollo-server';
import * as entityModel from './models/entity';
import * as aireModel from './models/aire';
import { schema } from './schema';


export interface Context {
  models: {
    entity: typeof entityModel,
    aire: typeof aireModel,
  }
};


const context: Context = {
  models: {
    entity: entityModel,
    aire: aireModel,
  }
};

const server = new ApolloServer({
  typeDefs: schema,
  resolvers,
  context
});

server.listen().then(({ url }) => {
  console.log(`ready at ${url}`);
});