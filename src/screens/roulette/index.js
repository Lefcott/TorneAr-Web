import React, { useEffect } from "react";
import Roulette from "components/Roulette";
import socket from "common/socket";
import { useQuery } from "@apollo/client";
import game from "queries/game";

export default function RouletteScreen() {
  const { loading, error, data } = useQuery(game, {
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
    socket.on("betStarted", handleBetStarted);
    socket.on("betEnded", handleBetEnded);

    return () => {
      socket.off("betStarted", handleBetStarted);
      socket.off("betEnded", handleBetEnded);
    };
  });

  return (
    <div>
      <Roulette />
    </div>
  );
}
