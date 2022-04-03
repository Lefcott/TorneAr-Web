import useCountdown from "hooks/roulette/useCountdown";
import { useState, useEffect } from "react";

import style from "./style.module.scss";

const Timer = () => {
  const countdown = useCountdown();
  const [dissapeared, setDissapeared] = useState(true);
  const isRed = countdown <= 9;

  useEffect(() => {
    if (!countdown) return;

    setDissapeared(false);
    setTimeout(() => {
      setDissapeared(true);
    }, 700);
  }, [countdown]);

  return (
    <div
      className={`${style.timer}${
        dissapeared ? ` ${style.timerDissapeared}` : ""
      }${isRed ? ` ${style.timerRed}` : ""}`}
    >
      {countdown}
    </div>
  );
};

export default Timer;
