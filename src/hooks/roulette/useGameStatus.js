import { useEffect, useState } from "react";
import { useQuery } from "@apollo/client";
import getRouletteSocket from "common/socket/roulette";
import game from "queries/game";

const useBetEndDate = () => {
  const rouletteSocket = getRouletteSocket();
  const [gameStatus, setGameStatus] = useState({});
  const { data } = useQuery(game, { variables: { code: "roulette" } });

  // Sets the bet end date when loading the game for the first time
  useEffect(() => {
    if (data?.game.status === "betting") {
      setGameStatus({
        betEndsIn: data.game.nextStatusIn,
      });
    } else if (data?.game.status === "spinning") {
      setGameStatus({
        betStartsIn: data.game.nextStatusIn,
        result: data.game.result,
        users: data.game.users,
      });
    }
  }, [data]);

  // Listens to betStarted event and sets betEndDate
  useEffect(() => {
    const handleBetStarted = (data) => {
      setGameStatus({
        betEndsIn: data.nextStatusIn,
      });
    };
    const handleBetEnded = (data) => {
      setGameStatus({
        betStartsIn: data.nextStatusIn,
        result: data.result,
        users: data.users,
      });
    };
    rouletteSocket.on("betStarted", handleBetStarted);
    rouletteSocket.on("betEnded", handleBetEnded);

    return () => {
      rouletteSocket.off("betStarted", handleBetStarted);
      rouletteSocket.off("betEnded", handleBetEnded);
    };
  }, []);

  return gameStatus;
};

export default useBetEndDate;
