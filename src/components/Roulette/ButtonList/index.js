import style from "./style.module.scss";
import { useState } from "react";
import LargeButtons from "./LargeButtons";
import MediumButtons from "./MediumButtons";
import NumberList from "./NumberList";

const ButtonList = () => {
  const [selectedNumbers, setSelectedNumbers] = useState([]);

  const handleMouseEvent = (
    event,
    firstNumber,
    lastNumber,
    amount = 1,
    numbers
  ) => {
    const isHovered = event.type === "mouseenter";

    if (!isHovered) return setSelectedNumbers([]);

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
      />
      <LargeButtons handleMouseEvent={handleMouseEvent} />
      <MediumButtons handleMouseEvent={handleMouseEvent} />
    </div>
  );
};

export default ButtonList;
