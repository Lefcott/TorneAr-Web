import gql from "graphql-tag";

export default gql`
  mutation removeBet($gameCode: String!) {
    game(code: $gameCode) {
      removeBet {
        result
      }
    }
  }
`;
