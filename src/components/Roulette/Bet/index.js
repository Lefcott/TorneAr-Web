import { useState, useEffect } from "react";
import { useMutation } from "@apollo/client";
import betMutation from "queries/game/bet";
import removeBetMutation from "queries/game/removeBet";
import useGameStatus from "hooks/roulette/useGameStatus";
import Button from "components/Button";
import Badge from "./Badge";
import style from "./style.module.scss";
import { COIN_OPTIONS } from "./constants";

const Bet = ({
  result,
  setResult,
  betLoading,
  setBetLoading,
  hasBet,
  setHasBet,
}) => {
  const { isSpinning, betCoins, betResult } = useGameStatus();
  const [bet] = useMutation(betMutation);
  const [removeBet] = useMutation(removeBetMutation);
  const [coins, setCoins] = useState(COIN_OPTIONS[0].value);

  const handleBet = () => {
    setBetLoading(true);
    bet({
      variables: {
        gameCode: "roulette",
        result,
        coins: +coins,
      },
    })
      .then(() => {
        setHasBet(true);
      })
      .finally(() => {
        setBetLoading(false);
      });
  };

  const handleRemoveBet = () => {
    setBetLoading(true);
    removeBet({
      variables: {
        gameCode: "roulette",
      },
    })
      .then(() => {
        setHasBet(false);
      })
      .finally(() => {
        setBetLoading(false);
      });
  };

  useEffect(() => {
    if (isSpinning) return;
    setHasBet(false);
    setResult(null);
  }, [isSpinning]);

  useEffect(() => {
    if (!betCoins || !betResult) return;
    setHasBet(true);
    setCoins(betCoins);
    setResult(betResult);
  }, [betCoins, betResult]);

  return (
    <div className={style.betContainer}>
      {result && <Badge number={result} />}
      <select
        className={style.betSelector}
        disabled={hasBet || betLoading || isSpinning}
        value={coins}
        onChange={(e) => setCoins(e.target.value)}
      >
        {COIN_OPTIONS.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      {!hasBet ? (
        <Button
          green
          onClick={handleBet}
          disabled={!result || betLoading || isSpinning}
        >
          Apostar
        </Button>
      ) : (
        <Button
          red
          onClick={handleRemoveBet}
          disabled={!result || betLoading || isSpinning}
        >
          Cancelar apuesta
        </Button>
      )}
    </div>
  );
};

export default Bet;
