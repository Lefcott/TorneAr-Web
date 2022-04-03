import gql from "graphql-tag";

export default gql`
  query User($userId: Int!) {
    user(id: $userId) {
      id
      name
      surname
      email
      coins
    }
  }
`;
