import React, { useEffect, useState } from "react";
import roulettesrc from "./images/roulette.png";
import indicatorsrc from "./images/indicator.png";
import style from "./style.module.scss";
import animations from "./animation";
import ButtonComponent from "./ButtonList";
import Timer from "./Timer";

function getRand(min, max) {
  const result = Math.floor(Math.random() * (max - min) + min);
  return result;
}

const Roulette = () => {
  const [, setNumWin] = useState(25);

  useEffect(() => {
    let newNumWin = getRand(0, 37);
    let animationRoulette = new animations(newNumWin);
    animationRoulette.animation(newNumWin);
    setNumWin(newNumWin);
    setInterval(() => {
      let newNumWin = getRand(0, 37);
      let animationRoulette = new animations(newNumWin);
      animationRoulette.animation(newNumWin);
      setNumWin(newNumWin);
    }, 30000);
  }, []);

  return (
    <>
      <div className={style.roulette}>
        <img className={style.rouletteImg} src={roulettesrc} />
        <img className={style.indicator} src={indicatorsrc} />
        <Timer />
      </div>
      <ButtonComponent />
    </>
  );
};

export default Roulette;
