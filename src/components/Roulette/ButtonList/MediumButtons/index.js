import PropTypes from "prop-types";
import { BLACK_NUMBERS, RED_NUMBERS } from "../constants";

import style from "../style.module.scss";

const MediumButtons = (props) => {
  return (
    <div className={style.buttonRow}>
      <div
        onMouseEnter={(event) => props.handleMouseEvent(event, 1, 18)}
        onMouseLeave={(event) => props.handleMouseEvent(event)}
        className={`${style.button} ${style.button_gray} ${style.button_2_1}`}
      >
        1 a 18
      </div>
      <div
        onMouseEnter={(event) => props.handleMouseEvent(event, 2, 36, 2)}
        onMouseLeave={(event) => props.handleMouseEvent(event)}
        className={`${style.button} ${style.button_gray} ${style.button_2_1}`}
      >
        Pares
      </div>
      <div
        onMouseEnter={(event) =>
          props.handleMouseEvent(event, null, null, null, RED_NUMBERS)
        }
        onMouseLeave={(event) => props.handleMouseEvent(event)}
        className={`${style.button} ${style.button_red} ${style.button_2_1}`}
      >
        Rojas
      </div>
      <div
        onMouseEnter={(event) =>
          props.handleMouseEvent(event, null, null, null, BLACK_NUMBERS)
        }
        onMouseLeave={(event) => props.handleMouseEvent(event)}
        className={`${style.button} ${style.button_gray} ${style.button_2_1}`}
      >
        Negras
      </div>
      <div
        onMouseEnter={(event) => props.handleMouseEvent(event, 1, 35, 2)}
        onMouseLeave={(event) => props.handleMouseEvent(event)}
        className={`${style.button} ${style.button_gray} ${style.button_2_1}`}
      >
        Impares
      </div>
      <div
        onMouseEnter={(event) => props.handleMouseEvent(event, 19, 36)}
        onMouseLeave={(event) => props.handleMouseEvent(event)}
        className={`${style.button} ${style.button_gray} ${style.button_2_1}`}
      >
        19 a 36
      </div>
    </div>
  );
};

MediumButtons.propTypes = {
  handleMouseEvent: PropTypes.func.isRequired,
};

export default MediumButtons;
