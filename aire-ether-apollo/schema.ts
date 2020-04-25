import gql from 'graphql-tag';

export const schema = gql`
  type Query {
    getAireFeed(): [Aire!]!
    getAireProfile(entityId: ID!): [Aire]
  }

  type Entity {
    id: ID!
    name: String!
    aireProfile: [Aire]
    airFeed: [Aire]
    following: [Entity]
  }

  type Aire {
    id: ID!
    aire: String!
    echoes: BigInt!
    date: Date!
  }
`;