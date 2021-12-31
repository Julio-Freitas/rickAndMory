import { gql } from '@apollo/client';

export const Character = gql`
  query ($id: ID!) {
    character(id: $id) {
      name
      episode {
        id
        name
        episode
      }
    }
  }
`;
