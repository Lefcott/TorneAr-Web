import PropTypes from "prop-types";
import { BLACK_NUMBERS, RED_NUMBERS, ROWS } from "../constants";

import style from "../style.module.scss";

const NumberList = (props) => {
  return (
    <div className={style.numbersContainer}>
      <div
        className={`${style.button} ${style.button_green} ${style.button_1_3}`}
      >
        0
      </div>
      <div className={style.rowsContainer}>
        {ROWS.map((row, i) => (
          <div key={i} className={style.buttonRow}>
            {row.map((number, ii) => {
              const buttonClass = RED_NUMBERS.includes(number)
                ? "button_red"
                : BLACK_NUMBERS.includes(number)
                ? "button_gray"
                : "button_green";
              const isSelected = props.selectedNumbers.includes(number);

              return (
                <div
                  key={ii}
                  className={`${style.button} ${style[buttonClass]}${
                    isSelected ? ` ${style.selected}` : ""
                  }`}
                >
                  {number}
                </div>
              );
            })}
            <div
              className={`${style.button} ${style.button_gray}`}
              onMouseEnter={(event) =>
                props.handleMouseEvent(event, null, null, null, ROWS[i])
              }
              onMouseLeave={(event) => props.handleMouseEvent(event)}
            >
              2:1
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

NumberList.propTypes = {
  handleMouseEvent: PropTypes.func.isRequired,
  selectedNumbers: PropTypes.arrayOf(PropTypes.number).isRequired,
};

export default NumberList;
