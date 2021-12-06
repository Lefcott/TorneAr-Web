import { useState, useEffect } from "react";

import style from "./style.module.scss";
import useGameStatus from "hooks/useGameStatus";

const getCount = (date) => {
  const difference = date - new Date();
  if (difference <= 0) return 0;
  return Math.floor(difference / 1000);
};

const Timer = () => {
  const gameStatus = useGameStatus();
  const [count, setCount] = useState(0);
  const [dissapeared, setDissapeared] = useState(true);
  const isRed = count <= 9;

  // Decreases the value of counter based on the betEndDate
  useEffect(() => {
    if (!gameStatus.betEndDate) return;
    const changeCount = () => {
      const newCount = getCount(gameStatus.betEndDate);
      setCount(newCount);
      if (newCount > 0) {
        setTimeout(changeCount, 1000);
        setDissapeared(false);
        setTimeout(() => {
          setDissapeared(true);
        }, 700);
      }
    };

    changeCount();
  }, [gameStatus.betEndDate]);

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
