import { gsap } from "gsap";

import useGameStatus from "hooks/roulette/useGameStatus";
import { useEffect, useRef } from "react";
import { ROULETTE_NUMBERS } from "./constants";

import style from "./style.module.scss";
import wheelImage from "./wheel.png";

const Wheel = () => {
  const gameStatus = useGameStatus();
  const imageRef = useRef(null);

  // Spins the wheel when it has a betEndsIn
  useEffect(() => {
    if (!("betEndsIn" in gameStatus)) return;

    gsap.to(imageRef.current, {
      duration: gameStatus.betEndsIn / 1000,
      opacity: 0.5,
      rotation: -360 * 8,
      ease: "slowly",
    });
  }, [gameStatus.betEndsIn]);

  // Spins the wheel back when it has a betStartsIn
  useEffect(() => {
    if (!("betStartsIn" in gameStatus)) return;
    const result = +gameStatus.result;
    const angleToRotate = ((ROULETTE_NUMBERS.indexOf(result) + 1) * 360) / 37;

    gsap.to(imageRef.current, {
      duration: gameStatus.betStartsIn / 1000,
      opacity: 0.5,
      rotation: 360 * 8 + angleToRotate,
      ease: "slowly",
    });
  }, [gameStatus.betStartsIn]);

  return <img className={style.rouletteImg} src={wheelImage} ref={imageRef} />;
};

export default Wheel;
