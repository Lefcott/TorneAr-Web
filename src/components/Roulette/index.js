import { useState } from "react";
import indicatorsrc from "./images/indicator.png";
import style from "./style.module.scss";
import ButtonList from "./ButtonList";
import Timer from "./Timer";
import Wheel from "./Wheel";
import LastResults from "./LastResults";
import Bet from "./Bet";

const Roulette = () => {
  const [result, setResult] = useState(null);
  const [hasBet, setHasBet] = useState(false);
  const [betLoading, setBetLoading] = useState(false);

  const handleChangeResult = (newResult) => {
    if (betLoading || hasBet) {
      return;
    }
    setResult(newResult);
  };

  return (
    <>
      <div className={style.roulette}>
        <div className={style.wheelContainer}>
          <Wheel />
          <img className={style.indicator} src={indicatorsrc} />
        </div>
        <LastResults />
        <Timer />
        <div className={style.betContainer}>
          <Bet
            result={result}
            hasBet={hasBet}
            setHasBet={setHasBet}
            betLoading={betLoading}
            setBetLoading={setBetLoading}
          />
        </div>
      </div>
      <ButtonList onResultChange={handleChangeResult} />
    </>
  );
};

export default Roulette;
