import gql from "graphql-tag";

export default gql`
  query Game($code: String!) {
    game(code: $code) {
      id
      name
      status
      result
      nextStatusDate
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
