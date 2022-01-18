import useGameStatus from "hooks/roulette/useGameStatus";
import style from "./style.module.scss";

const LastResults = () => {
  const gameStatus = useGameStatus();

  return (
    <div className={style.lastResultsContainer}>
      Últimos resultados:
      {!gameStatus.lastResults && "..."}
      {gameStatus.lastResults?.map((result, i) => (
        <div className={style.item} key={i}>
          {result}
        </div>
      ))}
    </div>
  );
};

export default LastResults;
