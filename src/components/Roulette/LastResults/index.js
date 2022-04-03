import useGameStatus from "hooks/roulette/useGameStatus";
import { getNumberColor } from "utils/getNumberColor";
import style from "./style.module.scss";

const LastResults = () => {
  const gameStatus = useGameStatus();

  return (
    <div className={style.lastResultsContainer}>
      Últimos resultados:
      {!gameStatus.lastResults && "..."}
      {gameStatus.lastResults?.map((result, i) => (
        <div
          className={`${style.item} ${style[getNumberColor(+result)]}`}
          key={i}
        >
          {result}
        </div>
      ))}
    </div>
  );
};

export default LastResults;
