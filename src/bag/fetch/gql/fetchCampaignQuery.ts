import gql from 'graphql-tag';

export const FetchCampaignGQL = gql`
  query FetchCampaign($id: ID!) {
    fetchCampaign(id: $id) {
      __typename
      ... on Campaign {
        id
        name
        gold
        silver
        bronze
        items {
          name
          description
        }
      }
      ... on CampaignNotFound {
        message
      }
    }
  }
`;