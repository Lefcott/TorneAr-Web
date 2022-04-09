import { useState, useEffect } from "react";
import { useQuery } from "@apollo/client";
import currentUser from "queries/user/currentUser";
import getUserSocket from "common/socket/user";

const useUser = () => {
  const { data } = useQuery(currentUser);
  const [user, setUser] = useState(null);
  const userSocket = getUserSocket();

  useEffect(() => {
    setUser({
      ...(user ? user : {}),
      ...data?.currentUser,
    });
  }, [data]);

  useEffect(() => {
    const handleChangeUserCoins = (data) => {
      if (user) {
        setUser({ ...user, coins: data.coins });
      }
    };

    userSocket.on("userUpdated", handleChangeUserCoins);
    return () => {
      userSocket.off("userUpdated", handleChangeUserCoins);
    };
  });

  return user;
};

export default useUser;
