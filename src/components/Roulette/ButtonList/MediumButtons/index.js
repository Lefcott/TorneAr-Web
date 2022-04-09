import PropTypes from "prop-types";
import { BLACK_NUMBERS, RED_NUMBERS } from "common/constants";
import { getNumberTranslation } from "utils/getNumberTranslation";
import style from "../style.module.scss";

const MediumButtons = (props) => {
  return (
    <div className={style.buttonRow}>
      <div
        onMouseEnter={(event) => props.handleMouseEvent(event, 1, 18)}
        onMouseLeave={(event) => props.handleMouseEvent(event)}
        className={`${style.button} ${style.button_gray} ${style.button_2_1}`}
        onClick={() => props.onResultChange("1-18")}
      >
        {getNumberTranslation("1-18")}
      </div>
      <div
        onMouseEnter={(event) => props.handleMouseEvent(event, 2, 36, 2)}
        onMouseLeave={(event) => props.handleMouseEvent(event)}
        className={`${style.button} ${style.button_gray} ${style.button_2_1}`}
        onClick={() => props.onResultChange("even")}
      >
        {getNumberTranslation("even")}
      </div>
      <div
        onMouseEnter={(event) =>
          props.handleMouseEvent(event, null, null, null, RED_NUMBERS)
        }
        onMouseLeave={(event) => props.handleMouseEvent(event)}
        className={`${style.button} ${style.button_red} ${style.button_2_1}`}
        onClick={() => props.onResultChange("red")}
      >
        {getNumberTranslation("red")}
      </div>
      <div
        onMouseEnter={(event) =>
          props.handleMouseEvent(event, null, null, null, BLACK_NUMBERS)
        }
        onMouseLeave={(event) => props.handleMouseEvent(event)}
        className={`${style.button} ${style.button_gray} ${style.button_2_1}`}
        onClick={() => props.onResultChange("black")}
      >
        {getNumberTranslation("black")}
      </div>
      <div
        onMouseEnter={(event) => props.handleMouseEvent(event, 1, 35, 2)}
        onMouseLeave={(event) => props.handleMouseEvent(event)}
        className={`${style.button} ${style.button_gray} ${style.button_2_1}`}
        onClick={() => props.onResultChange("odd")}
      >
        {getNumberTranslation("odd")}
      </div>
      <div
        onMouseEnter={(event) => props.handleMouseEvent(event, 19, 36)}
        onMouseLeave={(event) => props.handleMouseEvent(event)}
        className={`${style.button} ${style.button_gray} ${style.button_2_1}`}
        onClick={() => props.onResultChange("19-36")}
      >
        {getNumberTranslation("19-36")}
      </div>
    </div>
  );
};

MediumButtons.propTypes = {
  handleMouseEvent: PropTypes.func.isRequired,
};

export default MediumButtons;
