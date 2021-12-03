import React, { useEffect, useState, useRef } from "react";
import roulettesrc from "./images/roulette.png";
import indicatorsrc from "./images/indicator.png";
import style from "./style.module.scss";
import animations from "./animation";
import ButtonComponent from "./buttonComponent";

function getRand(min, max) {
  const result = Math.floor(Math.random() * (max - min) + min);
  return result;
}

const Roulette = () => {
  const [counter, setcounter] = useState(25);
  const [, setNumWin] = useState(25);
  const counterRef = useRef(counter);

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

  useEffect(() => {
    const startCounter = () => {
      let interval;
      setTimeout(() => {
        let animation = new animations();
        animation.animationCounter();
        interval = setInterval(() => {
          counterRef.current = counterRef.current - 1;
          setcounter(counterRef.current);
          if (counterRef.current === 0) {
            animation.number = "white";
            clearInterval(interval);
            setcounter(25);
            counterRef.current = 25;
          } else if (counterRef.current > 9) {
            animation.animationCounter();
          } else {
            animation.number = "red";
            animation.animationCounter();
          }
        }, 1000);
      }, 5000);
    };

    startCounter();
    setInterval(startCounter, 30000);
  }, []);

  return (
    <>
      <div className={style.roulette}>
        <img className={style.rouletteImg} src={roulettesrc} />
        <img className={style.indicator} src={indicatorsrc} />
        <h1 className={style.counterStyle}>{counter.toString()}</h1>
      </div>
      <ButtonComponent />
    </>
  );
};

export default Roulette;
