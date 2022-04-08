import { useState } from "react";
import { useMutation } from "@apollo/client";
import betMutation from "queries/game/bet";
import removeBetMutation from "queries/game/removeBet";
import Button from "components/Button";
import Badge from "./Badge";
import style from "./style.module.scss";
import { COIN_OPTIONS } from "./constants";

const Bet = ({ result }) => {
  const [bet, { loading: betLoading }] = useMutation(betMutation);
  const [removeBet, { loading: removeBetLoading }] =
    useMutation(removeBetMutation);
  const [hasBet, setHasBet] = useState(false);
  const [coins, setCoins] = useState(COIN_OPTIONS[0].value);

  const handleBet = () => {
    bet({
      variables: {
        gameCode: "roulette",
        result,
        coins: +coins,
      },
    }).then(() => {
      setHasBet(true);
    });
  };

  const handleRemoveBet = () => {
    removeBet({
      variables: {
        gameCode: "roulette",
      },
    }).then(() => {
      setHasBet(false);
    });
  };

  return (
    <div className={style.betContainer}>
      {result && <Badge number={result} />}
      <select
        className={style.betSelector}
        disabled={!result || hasBet || betLoading || removeBetLoading}
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
        <Button green onClick={handleBet} disabled={!result || betLoading}>
          Apostar
        </Button>
      ) : (
        <Button
          red
          onClick={handleRemoveBet}
          disabled={!result || removeBetLoading}
        >
          Cancelar apuesta
        </Button>
      )}
    </div>
  );
};

export default Bet;
