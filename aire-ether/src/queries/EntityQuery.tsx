import gql from 'graphql-tag';

export const EntityQuery = gql`
  query EntityQuery($id: ID!) {
    getEntity(entityId: $id) {
      name
      airefeed
    }
  }
`;