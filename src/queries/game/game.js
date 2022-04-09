import gql from "graphql-tag";

export default gql`
  query Game($code: String!) {
    game(code: $code) {
      id
      name
      status
      result
      nextStatusIn
      lastResults
      userGames {
        user {
          id
          name
        }
        currentBetCoins
        currentBetResult
      }
    }
  }
`;
