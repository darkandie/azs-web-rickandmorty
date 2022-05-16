import { gql } from "@apollo/client";

export const INFO_EPISODE = gql`
  query getEpisode($id: ID!) {
    episode(id: $id) {
      id
      episode
      name
      air_date
      characters{
        name
        status
        image
        species
      }
    }
  }
`;

export const INFO_EPISODES = gql`
  query getEpisodes{
    episodes {
      results {
        id
        name
        air_date
        episode
      }
    }
  }
`;
