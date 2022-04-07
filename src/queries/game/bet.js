import gql from "graphql-tag";

export default gql`
  mutation bet($gameCode: String!, $result: String!, $coins: Int!) {
    game(code: $gameCode) {
      bet(result: $result, coins: $coins) {
        result
      }
    }
  }
`;
