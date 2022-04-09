import { ApolloClient, InMemoryCache } from "@apollo/client";

const graphql = new ApolloClient({
  uri: `${process.env.REACT_APP_API_URL}/graphql`,
  cache: new InMemoryCache(),
  headers: {
    // TODO take this token from localStorage
    Authorization:
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsImlhdCI6MTY0OTI3ODgxMn0.8EQNtx1echGYqZLcOa_iVVolvvmmdVwUg_uJ75-Qonk",
  },
});

export default graphql;
