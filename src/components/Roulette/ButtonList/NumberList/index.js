import PropTypes from "prop-types";
import { getNumberColor } from "utils/getNumberColor";
import { ROWS } from "common/constants";
import { getNumberTranslation } from "utils/getNumberTranslation";
import style from "../style.module.scss";

const NumberList = (props) => {
  return (
    <div className={style.numbersContainer}>
      <div
        className={`${style.button} ${style.button_green} ${style.button_1_3}`}
        onClick={() => props.onResultChange("0")}
      >
        0
      </div>
      <div className={style.rowsContainer}>
        {ROWS.map((row, i) => (
          <div key={i} className={style.buttonRow}>
            {row.map((number, ii) => {
              const buttonClass = `button_${getNumberColor(number)}`;
              const isSelected = props.selectedNumbers.includes(number);

              return (
                <div
                  key={ii}
                  className={`${style.button} ${style[buttonClass]}${
                    isSelected ? ` ${style.selected}` : ""
                  }`}
                  onClick={() => props.onResultChange(`${number}`)}
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
              onClick={() => props.onResultChange(`row${i + 1}`)}
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
  onResultChange: PropTypes.func.isRequired,
};

export default NumberList;
