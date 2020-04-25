import gql from 'graphql-tag';

export const EtherFeed = gql`
  {
    getEtherFeed(sortDirection: DESC) {
      id
      name
      aire
    }
  }
`;