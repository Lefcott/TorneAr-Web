import { useEffect } from "react";
import Roulette from "components/Roulette";
import getRouletteSocket from "common/socket/roulette";
import { useQuery } from "@apollo/client";
import game from "queries/game";

export default function RouletteScreen() {
  const rouletteSocket = getRouletteSocket();
  const { data } = useQuery(game, {
    variables: { code: "roulette" },
  });

  if (data) {
    console.log("got game data!", data);
  }

  useEffect(() => {
    const handleBetStarted = (params) => {
      console.log("bet has started!", params);
    };
    const handleBetEnded = (params) => {
      console.log("bet has ended!", params);
    };
    rouletteSocket.on("betStarted", handleBetStarted);
    rouletteSocket.on("betEnded", handleBetEnded);

    return () => {
      rouletteSocket.off("betStarted", handleBetStarted);
      rouletteSocket.off("betEnded", handleBetEnded);
    };
  });

  return (
    <div>
      <Roulette />
    </div>
  );
}
