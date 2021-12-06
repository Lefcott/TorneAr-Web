import { useState, useEffect } from "react";
import getRouletteSocket from "common/socket/roulette";

import style from "./style.module.scss";
import { useQuery } from "@apollo/client";
import game from "queries/game";

const getCount = (date) => {
  const difference = date - new Date();
  if (difference <= 0) return 0;
  return Math.floor(difference / 1000);
};

const Timer = () => {
  const rouletteSocket = getRouletteSocket();
  const [betEndDate, setBetEndDate] = useState(null);
  const [count, setCount] = useState(0);
  const [dissapeared, setDissapeared] = useState(true);
  const isRed = count <= 9;
  const { data } = useQuery(game, { variables: { code: "roulette" } });

  // Sets the bet end date when loading the game for the first time
  useEffect(() => {
    if (data?.game.status === "betting") {
      setBetEndDate(new Date(data.game.nextStatusDate));
    }
  }, [data]);

  // Listens to betStarted event and sets betEndDate
  useEffect(() => {
    const handleBetStarted = (data) => {
      setBetEndDate(new Date(data.betEndDate));
    };
    rouletteSocket.on("betStarted", handleBetStarted);

    return () => {
      rouletteSocket.off("betStarted", handleBetStarted);
    };
  }, []);

  // Decreases the value of counter based on the betEndDate
  useEffect(() => {
    if (!betEndDate) return;
    const changeCount = () => {
      const newCount = getCount(betEndDate);
      setCount(newCount);
      if (newCount > 0) {
        setTimeout(changeCount, 1000);
        setDissapeared(false);
        setTimeout(() => {
          setDissapeared(true);
        }, 700);
      }
    };

    console.log("betEndDate", betEndDate);
    changeCount();
  }, [betEndDate]);

  return (
    <div
      className={`${style.timer}${
        dissapeared ? ` ${style.timerDissapeared}` : ""
      }${isRed ? ` ${style.timerRed}` : ""}`}
    >
      {count}
    </div>
  );
};

export default Timer;
