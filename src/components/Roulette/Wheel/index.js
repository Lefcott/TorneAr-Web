import { gsap } from "gsap";

import useGameStatus from "hooks/useGameStatus";
import { useEffect } from "react";
import { ROULETTE_NUMBERS } from "./constants";

import style from "./style.module.scss";
import wheelImage from "./wheel.png";

const Wheel = () => {
  const gameStatus = useGameStatus();

  // When betEndDate changes and has a value, the game status is betting
  useEffect(() => {
    if (!gameStatus.betEndDate) return;
    const timeToWait = Math.max(0, gameStatus.betEndDate - new Date());

    gsap.to(`.${style.rouletteImg}`, {
      duration: timeToWait / 1000,
      opacity: 0.5,
      rotation: -360 * 8,
      ease: "slowly",
    });
  }, [gameStatus.betEndDate]);

  // When betStartDate changes and has a value, the game status is spinning
  // It will go to the result decided by the server
  useEffect(() => {
    if (!gameStatus.betStartDate) return;
    console.log("going to result", gameStatus.result);
    const result = +gameStatus.result;
    const timeToWait = Math.max(0, gameStatus.betStartDate - new Date());
    const angleToRotate = ((ROULETTE_NUMBERS.indexOf(result) + 1) * 360) / 37;

    gsap.to(`.${style.rouletteImg}`, {
      duration: timeToWait / 1000,
      opacity: 0.5,
      rotation: 360 * 8 + angleToRotate,
      ease: "slowly",
    });
  }, [gameStatus.betStartDate]);

  return <img className={style.rouletteImg} src={wheelImage} />;
};

export default Wheel;
