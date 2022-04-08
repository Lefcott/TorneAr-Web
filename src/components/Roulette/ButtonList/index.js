import { useState } from "react";
import useGameStatus from "hooks/roulette/useGameStatus";
import LargeButtons from "./LargeButtons";
import MediumButtons from "./MediumButtons";
import NumberList from "./NumberList";
import style from "./style.module.scss";

const ButtonList = ({ onResultChange, hasBet, betLoading }) => {
  const { status: gameStatus } = useGameStatus();
  const [selectedNumbers, setSelectedNumbers] = useState([]);
  const isSpinning = gameStatus === "spinning";

  const handleChangeResult = (newResult) => {
    if (betLoading || hasBet || isSpinning) {
      return;
    }
    onResultChange(newResult);
  };

  const handleMouseEvent = (
    event,
    firstNumber,
    lastNumber,
    amount = 1,
    numbers
  ) => {
    const isHovered = event.type === "mouseenter";

    if (!isHovered) return setSelectedNumbers([]);

    if (hasBet || betLoading || isSpinning) return;

    if (numbers) {
      return setSelectedNumbers(numbers);
    }

    const newSelectedNumbers = [];
    for (let i = firstNumber; i <= lastNumber; i += amount) {
      newSelectedNumbers.push(i);
    }
    setSelectedNumbers(newSelectedNumbers);
  };

  return (
    <div className={style.buttonList}>
      <NumberList
        handleMouseEvent={handleMouseEvent}
        selectedNumbers={selectedNumbers}
        onResultChange={handleChangeResult}
      />
      <LargeButtons
        handleMouseEvent={handleMouseEvent}
        onResultChange={handleChangeResult}
      />
      <MediumButtons
        handleMouseEvent={handleMouseEvent}
        onResultChange={handleChangeResult}
      />
    </div>
  );
};

export default ButtonList;
