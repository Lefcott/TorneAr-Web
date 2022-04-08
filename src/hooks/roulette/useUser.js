import { useQuery } from "@apollo/client";
import currentUser from "queries/user/currentUser";

const useUser = () => {
  const { data } = useQuery(currentUser);

  return data?.currentUser;
};

export default useUser;
